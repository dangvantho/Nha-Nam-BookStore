const mongoose=require('mongoose')
const url='mongodb+srv://thothotho123:dangvantho123@cluster0.5dfml.mongodb.net/bookStore'
const db={
    connect: ()=>{
        mongoose.connect(url)
          .then(()=>console.log('Connect to database success!!!'))
          .catch(()=>console.log('Connect failure!!!'))
    }
}
module.exports=db