const NotifyPages= require('../models/NotifyPages')

class pagesController{
    create(req,res){
        const {title,content}=req.body
        const name=res.locals.name
        if(name!=='admin'){
            res.send('Bạn không có quyền đăng nhập vào trang này')
            return 
        }
        NotifyPages.create({title, content})
        .then(data=>res.send('Create new page success!!!'))
        .catch(err=>res.send('Create err'))
    }
    // [get] page
    index(req,res){
        const title= req.params.title
        console.log(title)
        NotifyPages.findOne({title})
        .then(data=>res.json(data))
        .catch(err=>res.send('Cannot found this pages'))
    }
}
module.exports= new pagesController