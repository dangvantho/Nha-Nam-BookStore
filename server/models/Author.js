const mongoose=require('mongoose')
const AuthorSchema=new mongoose.Schema({
    name:String,
    age: String,
    desc: String,
    books: Array,
})
const Author=mongoose.model('author',AuthorSchema,'authors')
module.exports=Author