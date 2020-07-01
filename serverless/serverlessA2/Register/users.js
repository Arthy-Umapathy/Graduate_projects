//will contain all of my user related routes
const express = require("express");
const mysql = require("mysql");
const router = express();
const path = require("path");
var assert = require("chai").assert;

//home page routing
router.get("/", (req, res) => {
  res.redirect("register.html");
});

//setting up view engine
router.set("view engine", "ejs");

//api creation
router.get("/user_details", (req, res) => {
  const query = "select * from user_state";
  getConnection().query(query, (err, results, fields) => {
    res.json(results);
  });
});

//posting the register page details into mysql
router.post("/login", (req, res) => {
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
        res.sendStatus(500);
        assert.equal(err.message, "Not Found");
        assert.equal(res.status, 404);
        return;
      }
      const state = "offline";
      query = "insert into user_state(mail,state) values (?,?)";
      getConnection().query(query, [mail, state], (err, rows, fields) => {
        if (err) {
          res.sendStatus(500);
          assert.equal(err.message, "Not Found");
          assert.equal(res.status, 404);

          return;
        }
      });
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
