//will contain all of my user related routes
const express = require("express");
const mysql = require("mysql");
const router = express();
const path = require("path");

//home page routing
router.get("/", (req, res) => {
  res.redirect("register.html");
});

router.set("view engine", "ejs");

var gusername = "";

//fetching user row with the help of the name
router.post("/welcome.html", (req, res) => {
  const connection = getConnection();

  const userid = req.body.username;
  const pwds = req.body.password;
  const online = "online";
  if (userid && pwds) {
    connection.query(
      "Select * from user_details where email = ? and pwd = ?",
      [userid, pwds],
      function (error, results, fields) {
        if (results.length > 0) {
          gusername = userid;

          var now = new Date();
          connection.query(
            "update user_state set state = ? ,onlinetime = ? where mail = ?",
            [online, now, userid],
            (error, results, fields) => {
              if (error) {
                console.log(error.message);
              }
            }
          );
          res.redirect("welcome.html");
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
});

var obj = {};

// router.get("/welcome.html", (req, res) => {
//   res.sendFile(__dirname + "welcome.html");
// });

router.get("/user_details", (req, res) => {
  const query = "select * from user_state";
  getConnection().query(query, (err, results, fields) => {
    res.json(results);
  });
});

//posting the register page details into mysql
router.post("/login", (req, res) => {
  console.log("first name:" + req.body.create_name);

  const name = req.body.create_name;
  const mail = req.body.create_email;
  const pwd = req.body.create_pwd;
  const topic = req.body.topic;

  const querString =
    "insert into user_details (user_name,email,pwd,topic) values (?,?,?,?)";
  getConnection().query(
    querString,
    [name, mail, pwd, topic],
    (err, results, fields) => {
      if (err) {
        console.log("failed" + err);
        res.sendStatus(500);
        return;
      }
      const state = "offline";
      query = "insert into user_state(mail,state) values (?,?)";
      getConnection().query(query, [mail, state], (err, rows, fields) => {
        if (err) {
          res.sendStatus(500);
          return;
        }
      });

      console.log("inserted" + results.insertId);
      res.end();
    }
  );
});

//connecting to mysql
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "database-1.cigxoyp3dem3.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "serverless",
  database: "onlinemeeting",
});

//method to get connection
function getConnection() {
  return pool;
}
module.exports = router;
