const Comment= require('../models/Comment')
const getRespondComment=(comment)=>{
    return new Promise((resolve,reject)=>{
        Comment.find({_id: comment.id},null,{sort:{createAt: -1}})
        .then(data=>{
            comment.respond=data
            resolve(comment)
        })
        .catch(err=>reject(err))
    })
}
class commentController{
    async index(req,res){
        const {id}= req.params
        const {pages}=req.query
        const data= await Comment.find({book: id},null,{
            limit:20,
            skip: pages ? (pages-1)*10 : 0,
            sort:{createAt: -1}
        })
        Promise.all(data.map(comment=>getRespondComment(comment._doc)))
        .then(values=>res.json(values))
        .catch(err=>res.send('Find comment failure!!!'))
    }
    post(req,res){
        const {id}=req.params
        const {user,content}=req.body
        
        Comment.create({
            book:id,
            user,
            content,
            createAt: Date.now(),
            updateAt: Date.now(),
        }).then(data=>res.json(data))
        .catch(err=>res.json(err))
    }
}
module.exports= new commentController