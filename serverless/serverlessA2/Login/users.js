//will contain all of my user related routes
const express = require("express");
const mysql = require("mysql");
const router = express();
const path = require("path");

//home page routing
router.get("/", (req, res) => {
  res.redirect("register.html");
});

//setting up view engine
router.set("view engine", "ejs");

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
                assert.equal(err.message, "No Rows Found");
                assert.equal(res.status, 404);
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
