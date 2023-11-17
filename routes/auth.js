const express = require("express");
const authcontrollers = require("../controllers/auth");
const lecturer=require("../controllers/lecturer")
const controller = require("../controllers/login.js");
const router = express.Router();
const mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "timetable",
});

router.post("/register", authcontrollers.register);
router.post("/login", controller.login);

router.post("/lecturer", lecturer.lecturer);

router.post("/dashboard", (req, res) => {

  
  db.query("insert into timetable set ?")

  console.log("data saved");
  res.send("saved");
});
/*{
    console.log("The request body is", req.body)
    const data=req.body
    
    db.query("insert into signup set ?",data,(err,result)=>{
        
        if(err)
        res.send(err)
        else 
        res.send(result)
      })
    
    
    
}*/

module.exports = router;
