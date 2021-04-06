const express=require('express')
const userController=require('../controllers/user.controller')
const router=express.Router()

// [post] /user
router.post('/user',userController.postUser)
router.post('/login',userController.postLogin)

module.exports=router