const express= require('express')
const historyController= require('../controllers/history.controller')
const router= express.Router()

router.get('/:id',historyController.getById)
router.get('/:user',historyController.getByUser)
router.post('/',historyController.postHistory)

module.exports= router