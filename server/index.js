const express=require('express')
const cookie=require('cookie-parser')
const path=require('path')
const db=require('./config/connect')

const authorRoute=require('./routes/author.route')

// Setup for app 
const app=express()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookie())

// Connect to db
db.connect()

// [get] home
app.get('/',(req,res)=>res.render('./index'))
// /post/author
app.use('/post',authorRoute)

// Start server
const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`App is running on port ${port}`))