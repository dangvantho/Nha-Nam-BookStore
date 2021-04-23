const Book = require('../models/Book')
const Author=require('../models/Author')
const uploadFile=require('../middleware/uploadImage')
const Image= require('../models/Image')
// [get] image of book
function getImageBook(book){
    return new Promise((resolve,reject)=>{
        Image.find({files_id: book._id})
          .then(images=>{
            let newBook={...book}
            let str=''
            images.map(value=>{
                str+=value._doc.data.toString('base64')
            })
            newBook.image=str
            return newBook
          }).then(data=>resolve(data))
          .catch(err=>reject(err))
    })
}
class bookController{
    
    async index(req,res){
        let {type,page}=req.query
        if(type=='bestSeller'){
            const count= await Book.count({})
            let data= await Book.find({},null,{
                skip: count>page*20  ? 20*(page-1): 20*(Math.floor(count/20)),
                limit: 20,
                sort: {
                    sold: -1,
                }
            })
            if(data.length>0){
                Promise.all(data.map(book=>{
                    return getImageBook(book._doc)
                })).then(datas=>res.json({data:datas ,type}))
             }
            return  
        } else{
            const count = await Book.count({type})
            console.log(count,type,req.query)
            let data=await Book.find({type},null,{
                skip: count>page*20  ? 20*(page-1): 20*(Math.floor(count/20)),
                limit: 20,
            })
            
            if(data.length>0){
               Promise.all(data.map(book=>{
                   return getImageBook(book._doc)
               })).then(datas=>res.json({data:datas ,type}))
            }
            return 
        }
        // console.log(result)
        // res.json({data: result ,type})
    }
    async postBook(req,res){
        const data= await uploadFile(req,res)
        res.json({upload: 'Sucess'})
        
    }
    // [get] book/:id 
    async oneBook(req,res){
        const {id}= req.params
        let data=await Book.findOne({_id:id})
        if(data){
            getImageBook(data._doc)
               .then(data=>res.json(data))
        }else res.json({err: 'Didn\'t find this book'})        
    }
    async filter(req,res){
        const filter=req.body.filter
        const keys=Object.getOwnPropertyNames(filter)
        let data= await Book.find(filter)
        if(data.length>0){
            Promise.all(data.map(value=>{
                return getImageBook(value._doc)
            })).then(data=>res.json({data,key:keys[0]}))
            .catch(err=>res.json({err:'Failure!!'}))
        }
        
    }
}
module.exports=new bookController