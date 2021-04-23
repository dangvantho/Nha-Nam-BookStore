const mongoose= require('mongoose')
const commentSchema= new mongoose.Schema({
    user: String,
    createAt: Date,
    updateAt:Date,
    book: mongoose.Types.ObjectId,
    content:String,

})
const Comment= mongoose.model('comment',commentSchema)

module.exports=Comment