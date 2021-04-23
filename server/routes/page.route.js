const expess=require('express')
const pagesController=require('../controllers/page.controller')
const auth=require('../middleware/auth')

const router=expess.Router()

// [post] 
router.get('/:title',pagesController.index)
router.post('/',auth.auth,pagesController.create)
// [get] 

module.exports=router