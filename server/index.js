const express=require('express')
const cookie=require('cookie-parser')
const path=require('path')

// Setup for app 
const app=express()
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookie())

// [get] home
app.get('/',(req,res)=>res.render('./index'))

// Start server
const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`App is running on port ${port}`))