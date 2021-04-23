const express=require('express')
const userController=require('../controllers/user.controller')
const router=express.Router()
const auth=require('../middleware/auth')

// [post] /user
router.post('/user', userController.postUser)
router.post('/login', userController.postLogin)
router.post('/auth', auth.auth, userController.checkAuth)
router.put('/user/updateCart', userController.updateCart)

module.exports=router