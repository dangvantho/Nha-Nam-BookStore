const mongoose=require('mongoose')
const notifySchema= new mongoose.Schema({
    title:String,
    content: String,
})
const NotifyPages=mongoose.model('page',notifySchema)
module.exports=NotifyPages