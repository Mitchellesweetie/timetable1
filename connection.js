const mysql=require('mysql')
var connection=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"timetable"
});
connection.connect((err)=>{
    if(!err)
        console.log("connected");
    
    else
        console.log(err);
    
});
module.exports=connection