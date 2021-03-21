const User=require('../models/User')
class userController{
    async postUser(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        const {name,password,email}=req.body
        const data=await User.create({name,password,email})
        console.log(data)
        res.json(data)
    }
}
module.exports= new userController