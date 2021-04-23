const express=require('express')
const authorController=require('../controllers/author.controller')

const router=express.Router()

// [post] 
router.post('/',authorController.postAuthor)

module.exports=router