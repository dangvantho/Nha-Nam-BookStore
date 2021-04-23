const History= require('../models/History')
const Session= require('../models/Session')
const User= require('../models/User')
const Book= require('../models/Book')
function transformTime(time){
    return time/1000/3600/24
}
class historyController{
    postHistory(req,res){
        const {user,paymentBy,cart,sessionId,name}=req.body.data
        if(user){
            User.findOneAndUpdate({name: user}, {cart: []})
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        } else {
            Session.findOneAndUpdate({_id: sessionId},{cart: []})
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        }
        Promise.all(cart.map(async(book)=>{
            let b= await Book.findOne({_id: book.idBook})
            let update= await Book.updateOne({_id: book.idBook},{sold: book.count+b.sold})
            return update
        })).then(()=>{
            History.create({
                user: user || sessionId,
                name,
                cart,
                paymentBy,
                createAt: Date.now(),
            }).then(data=>res.json(data._doc))
            .catch(err=>res.send(err))
        }).catch(err=>res.send('Update history failure!'))
        
    }
    getById(req,res){
        const {id}=req.params
        History.findOne({_id: id})
        .then(data=>{
            let result= data._doc
            let now= Date.now()
            let createAt=new  Date(result.createAt)
            let tam= transformTime(now - createAt.getTime())
            if(tam <= 1) result.status='Check thông tin người dùng'
            else if(tam>1 && tam<=2) result.status= 'Đã đưa đến đơn vị vận chuyển'
            else if(tam<=5 && tam>2) result.status=' Đang giao hàng'
            else  result.status='Giao hàng thành công'
            res.json(result)
        })
        .catch(err=>res.send(err))
    }
    getByUser(req,res){
        const {user}=req.params
        History.find({user})
        .then(data=>{
            let result= data.map(value=>{
                let newValue= value._doc
                let now= Date.now()
                let createAt=new  Date(newValue.createAt)
                let tam= transformTime(now - createAt.getTime())
                if(tam <= 1) newValue.status='Đang lấy hàng'
                else if(tam>1 && tam<=2) newValue.status= 'Đã đưa đến đơn vị vận chuyển'
                else if(tam<=5 && tam>2) newValue.status=' Đang giao hàng'
                else  newValue.status='Giao hàng thành công'
                return newValue
            })
            res.json(result)
        })
        .catch(err=>res.send(err))
    }
}
module.exports= new historyController