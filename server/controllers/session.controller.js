const shortId= require('shortid')
const Session = require('../models/Session')
const User = require('../models/User')

class sessionController{
    async index(req,res){
        const newSession={cart:[]}
        let data= await Session.create(newSession)
        data=data._doc
        res.json({
            session: data,
        })
    }
    async deleteSession(req,res){
        const {id}= req.params
        try {
            let data=await Session.deleteMany({_id: id})
            if(data) res.json(data)
        } catch (error) {
            res.send('delete fail')
        }
    }
    async updateCart(req,res){
        const {sessionId,cart}=req.body
        let data=await Session.updateOne({_id: sessionId},{cart})
        data= await Session.findOne({_id: sessionId})
        if(data) res.json(data._doc)
        else res.json({cart:[], err:'Get cart failure!!!'})
    }
    async getCart(req,res){
        const {id}= req.params
        const data= await Session.findOne({_id: id})
        if(data) res.json(data._doc)
        else res.json({cart:[], err:'Get cart failure!!!'})
    }
}
module.exports= new sessionController