const mysql=require('mysql')

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "timetable",
})

exports.lecturer=(req, res) => {
    console.log(req.body);
    const { username, staffid, id, school, department } = req.body;
    db.query(
      "insert into lecturer set ?",
      {
        username: username,
        staffid: staffid,
        id: id,
        school: school,
        department: department,
      },
      (err, result) => {
        if (err) throw err;
        else res.send("saved");
        console.log(result);
      }
    );
  }