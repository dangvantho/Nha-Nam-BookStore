const express=require('express')
const commentController=require('../controllers/comment.controller')

const router=express.Router()

// [get] /idBook
router.get('/:id',commentController.index)
router.post('/:id',commentController.post)

module.exports=router