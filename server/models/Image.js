const mongoose= require('mongoose')
const ImageSchema= new mongoose.Schema({
    files_id: mongoose.Types.ObjectId,
})
const Image= mongoose.model('images/books.chunk',ImageSchema)
module.exports= Image