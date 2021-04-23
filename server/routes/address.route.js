const express= require('express')
const addressController= require('../controllers/address.controller')
const { route } = require('./author.route')
const router= express.Router()

router.get('/:user',addressController.index)
router.post('/',addressController.postAddress)
module.exports=router
