const mysql = require("mysql");
const bycrypt = require("bcryptjs");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "timetable",
});
exports.register = (req, res) => {
  console.log(req.body);

  const { username, email, password, password2 } = req.body;
  db.query(
    "select email from signup where email=?",
    [email],
    async (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        return res.sendFile(__dirname + "/public/signup.html", {
          message: "that email has being used",
        });
      } else if (password !== password2) {
        return res.send("match password");
      }
      let hashedPassword = await bycrypt.hash(password, 8);
      console.log(hashedPassword);

     // res.send("testing");
    }
  );
  db.query(
    "insert into signup set ?",
    {
      username: username,
      email: email,
      password: password,
      password2: password2
    },
    (error, result) => {
      if (error) 
      console.log(error);
      else
      
       console.log(result);
       res.redirect("http://localhost:4500/login.html")
      
       
    }
    
  );

  
};

