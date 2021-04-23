const express=require('express')
const bookController=require('../controllers/book.controller')
const router=express.Router()

router.post('/',bookController.postBook)
router.get('/:id',bookController.oneBook)
router.post('/sortBy',bookController.filter)
router.get('/',bookController.index)

module.exports=router