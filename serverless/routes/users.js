//will contain all of my user related routes
const express = require("express");
const mysql = require("mysql");
const router = express();
const path = require("path");

//home page routing
router.get("/", (req, res) => {
  return res.send("go to users");
});

// // router.engine("html", require("ejs").renderFile);
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
          connection.query(
            "update user_state set state = ? where emailid = ?",
            [online, userid],
            (error, results, fields) => {
              if (error) {
                console.log(error.message);
              }
            }
          );
          res.redirect("welcome.html");
          // obj = { print: results };
          // res.render("welcome", { userData: { obj: obj } });
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

router.get("/welcomes", (req, res) => {
  res.sendFile(__dirname + "/welcome.html");
  console.log("here");
});

router.get("/user_details", (req, res) => {
  const query = "select * from user_state";
  getConnection().query(query, (err, results, fields) => {
    res.json(results);
  });
});

//posting the register page details into mysql
router.post("/login", (req, res) => {
  console.log("creating");
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
      query = "insert into user_state(emailid,state) values (?,?)";
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
  host: "localhost",
  user: "root",
  password: "Aaru@14123",
  database: "online_meeting",
});

//method to get connection
function getConnection() {
  return pool;
}
module.exports = router;
