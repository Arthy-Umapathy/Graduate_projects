//will contain all of my user related routes
const express = require("express");
const mysql = require("mysql");
const router = express();
const path = require("path");

//setting up view engine
router.set("view engine", "ejs");

//changing state after logout
router.post("/register.html", (req, res) => {
  const name = req.body.create_name;
  const state = "offline";
  await getConnection().query(
    "update user_state set state = ? where mail = ?",
    [state, name],
    (err, results, fields) => {
      if (err) {
        res.sendStatus(500);
        assert.equal(err.message, "Not Found");
        assert.equal(res.status, 404);
        return;
      }
    }
  );
  res.end();
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
