const mongoose=require('mongoose')
const sessionSchema= new mongoose.Schema({
    cart: Array,
})
const Session= mongoose.model('session',sessionSchema,'sessions')
module.exports=Session