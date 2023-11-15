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

    const { username, email, password, password2 } = req.body;
    db.query(
      "select email from signup where email=?",
      [email],
      (error, result) => {
        if (error) 
        console.log(error);
        else
        
         console.log(result);
      })

}