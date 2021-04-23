const jwt= require('jsonwebtoken')

module.exports.auth=function(req,res,next){
    let accesstoken= req.get('accesstoken')
    jwt.verify(accesstoken,'homnaylangaytuyetdep',(err,decode)=>{
        if(err) {
            res.json({errs: 'Failure auth!!!'})
            return 
        }
        else {
            res.locals.name= decode.name
            res.locals.token=accesstoken
            next()
            return
        }
    })
}