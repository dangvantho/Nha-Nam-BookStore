const mongoose= require('mongoose')
const addressSchema=new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    user: String,
    paymentBy:String,
})
const Address= mongoose.model('address',addressSchema)
module.exports= Address
