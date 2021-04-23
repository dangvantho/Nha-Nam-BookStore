const Address= require('../models/Address')
class addressController{
    index(req,res){
        const user=req.params.user
        Address.findOne({user})
        .then(data=>res.json({...data._doc}))
        .catch(err=>res.json({err: 'Get address failure!!!!'}))
    }
    postAddress(req,res){
        const { name, phone, address, user}= req.body
        Address.create({name, phone, address, user})
        .then(data=>res.json({...data._doc}))
        .catch(err=>res.json({err:' post address failure!!'}))
    }
}
module.exports= new addressController