const express= require('express')
const sessionController=require('../controllers/session.controller')
const router= express.Router()

// [get] /session
router.get('/', sessionController.index)
router.delete('/:id',sessionController.deleteSession)
router.put('/cart',sessionController.updateCart)
// [get] cart by id session
router.get('/cart/:id',sessionController.getCart)

module.exports=router