const mongoose = require('mongoose')
const BookSchema=new mongoose.Schema({
    title: String,
    author:String,
    publishCompany: String,
    pages:Number,
    size:String,
    time: String,
    money:String,
    saleOf:String,
    intro: String,
    type:String,
    sold: Number,
})
const Book= mongoose.model('book',BookSchema)

module.exports=Book