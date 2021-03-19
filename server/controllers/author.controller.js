const Author=require('../models/Author')
class adminController{
    index(req,res){
        res.render('./post.author.pug')
    }

    // [post]
    postAuthor(req,res){
        let {name,desc,age}=req.body
        let author={
            name,
            desc,
            age,
            book:[],
        }
        Author.create(author)
          .then(data=>{
              res.redirect('/post/author')
          })
    }
}
module.exports= new adminController