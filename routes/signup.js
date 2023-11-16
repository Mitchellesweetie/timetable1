const express=require("express")
const router=express.Router()
const mysql=require('mysql')
var db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"timetable"
})

router.get('/login',(req,res)=>{
    
    res.redirect("http://localhost:4500/login.html")
})
router.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/public/signup.html')

})
/*
router.post('/',(req,res)=>{
    console.log("The request body is", req.body)
    const data=req.body
    
    db.query("insert into signup set ?",data,(err,result)=>{
        
        if(err)
        res.send(err)
        else 
        res.send(result)
      })
    
    
    
})

*/
module.exports=router