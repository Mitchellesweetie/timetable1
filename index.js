const express=require('express')
const db=require("./connection.js")
const signupRouter=require("./routes/signup.js")
const auth=require('./routes/auth.js')
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use('/signup',signupRouter)
app.use('/auth',auth)



app.listen('4500',()=>{
    console.log('app running localhost: http://localhost:4500')
})
module.export=app
