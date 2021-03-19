const express=require('express')
const authorController=require('../controllers/author.controller')

const router=express.Router()

// [get] /post/author
router.get('/author',authorController.index)

// [post] 
router.post('/author',authorController.postAuthor)

module.exports=router