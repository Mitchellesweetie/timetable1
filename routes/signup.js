const express=require("express")
const router=express.Router()
const mysql=require('mysql')
const { connect } = require("../connection")
var db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"timetable"
})

router.get('/',(req,res)=>{
    
    res.send("hello")

})

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


module.exports=router