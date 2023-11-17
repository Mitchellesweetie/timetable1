const mysql = require("mysql");
const bycrypt = require("bcryptjs");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "timetable",
})
exports.login=(req,res)=>{
    console.log(req.body);

    const { username,password } = req.body;

    db.query("select* from signup where email=? and password=?",[username,password],(err,result)=>{
      if(err)throw err
      
      if(username==username&&password==password){
      res.redirect("http://localhost:4500/dashboard.html")}
      else
      res.send("kindly register")
      
    })
    
  

}
/*
 if (error) console.log(error);
        if(result.length==0){
        res.send("loggoed in")
        console.log("user does not exist")
        res.sendStatus(404)}
        else{
          const hashedpassword=result[0].password
          if(await bycrypt.compare(password,hashedpassword)){
            console.log("successfully logged")
            res.redirect("http://localhost:4500/signup.html")
*/