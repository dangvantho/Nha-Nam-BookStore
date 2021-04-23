const mongoose= require('mongoose')
const historyShema= new mongoose.Schema({
    user: String,
    cart: Array,
    createAt: Date,
    paymentBy: String,
    name: String,
})
const History= mongoose.model('history',historyShema)
module.exports=History