const express=require('express')
const authorController=require('../controllers/author.controller')

const router=express.Router()

// [post] 
router.post('/author',authorController.postAuthor)

module.exports=router