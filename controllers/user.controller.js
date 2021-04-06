const User=require('../models/User')
class userController{
    async postUser(req,res){
        const {name,password,email}=req.body
        const resCheck=await User.find({name})
        if(resCheck) {
            res.json({errs:'Đã tồn tại tài khoản này'})
            return
        }
        const data=await User.create({name,password,email})
        console.log(data,req.body)
        res.json(data)
    }
    async postLogin(req,res){
        const {name,password}= req.body
        const data= await User.findOne({name,password})
        if(data) {
            res.json({...data._doc, isAdmin:data.name==='admin' })
            return
        } else {
            res.json({errs: 'Wrong password or Username'})
            return
        }

    }
}
module.exports= new userController