const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:String,
    isAdmin: Boolean,
    email: String,
    password: String,
    cart: Array,
    history:Array,
})
const User=mongoose.model('user',UserSchema)
module.exports=User