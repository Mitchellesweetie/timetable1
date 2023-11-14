const express=require('express')
const db=require("./connection.js")
const signupRouter=require("./routes/signup.js")
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/signup',signupRouter)

app.get('/users',(req,res)=>{
    res.send("hello")
})

app.listen('4500',()=>{
    console.log('app running localhost: http://localhost:4500')
})

