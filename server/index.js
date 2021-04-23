const express=require('express')
const cookie=require('cookie-parser')
const path=require('path')
const db=require('./config/connect')
const cors = require('cors')
const formData= require('express-form-data')

const authorRoute=require('./routes/author.route')
const userRoute=require('./routes/user.route')
const sessionRoute= require('./routes/session.route')
const bookRoute=require('./routes/book.route')
const commentRoute=require('./routes/comment.route')
const pageRoute=require('./routes/page.route')
const addressRoute= require('./routes/address.route')
const historyRoute= require('./routes/history.route')

// Setup for app 
const app=express()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
// Cors 
app.use(cors({
  origin: "*",
  "Access-Control-Allow-Origin":"*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.use(express.static('public'))

// urlencoded
app.use(express.urlencoded({extended: true}))

app.use(express.json())
// Formdata encoded
// app.use(formData.parse())
app.use(cookie())

// Connect to db
db.connect()




// /author
app.use('/author',authorRoute)

// /book
app.use('/book',bookRoute)
app.use('/pages',pageRoute)

// [post] /post/user
app.use('/post',userRoute)

app.use('/session', sessionRoute)
app.use('/comments',commentRoute)
app.use('/address',addressRoute)
app.use('/history',historyRoute)
// [get] home
app.get('/',(req,res)=>res.render('./index'))

// Start server
const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`App is running on port ${port}`))