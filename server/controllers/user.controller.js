const User=require('../models/User')
const jsonwebtoken= require('jsonwebtoken')
const md5= require('md5')
class userController{
    async postUser(req,res){
        let {name,password,email}=req.body.data
        const resCheck=await User.find({name})
        if(resCheck.length!=0) {
            res.json({errs:'Đã tồn tại tài khoản này'})
            return
        }
        else {
            password=md5(password)
            const data=await User.create({name,password,email})
            res.json(data)
        }
    }
    postLogin(req,res){
        console.log(11111)
        let {name,password}= req.body
        password=md5(password)
        console.log(password,name)
        User.findOne({name,password})
            .then(data=>{
                const accesstoken=jsonwebtoken.sign({name},'homnaylangaytuyetdep',{ expiresIn: '1h' })
                console.log(data)
                res.json({...data._doc, isAdmin:data.name==='admin', accesstoken })
                
             })
             .catch(()=> res.json({errs:'Wrong password or name!!!'}))
    }
    checkAuth(req,res){
        let accesstoken= res.locals.token
        let name= res.locals.name
        User.findOne({name})
            .then(response=>{
              let data=response._doc
              res.json({...data,accesstoken,isAdmin:data.name==='admin'})
            })
    }
    async updateCart(req,res){
        const {user,cart}=req.body
        let data=await User.updateOne({name: user},{cart})
        data= await User.findOne({name: user})
        if(data) res.json(data._doc)
        else res.json({cart:[], err:'Get cart failure!!!'})
    }
    async getCart(req,res){
        const {id}= req.params
        const data= await User.findOne({_id: id})
        if(data) res.json(data._doc)
        else res.json({cart:[], err:'Get cart failure!!!'})
    }
}
module.exports= new userController