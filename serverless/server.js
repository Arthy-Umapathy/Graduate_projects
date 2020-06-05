const express = require("express");
const app = express();
const mysql = require("mysql");
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/user/:id", (req, res) => {
  console.log("Fetching user with id:" + req.params.id);

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aaru@14123",
    database: "online_meeting",
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
  const userid = req.params.id;
  const query = "Select * from user_details where id = ?";
  connection.query(query, [userid], (err, rows, fields) => {
    console.log(rows);
    return res.json(rows);
  });
});

app.get("/", (req, res) => {
  return res.send("go to users");
});

app.get("/users", (req, res) => {
  //   connection.query(selectAll, (err, results) => {
  //     if (err) {
  //       return res.send(err);
  //     } else {
  //       return res.json({
  //         data: results,
  //       });
  //     }
  //   });

  const user1 = { firstName: "Arthy", lastName: "Umapathy" };
  const user2 = { firstName: "Rajeswari", lastName: "Umapathy" };
  return res.json([user1, user2]);
  res.send("inside users..");
});

app.listen(3000, () => {
  console.log("Server is running on port:" + 3000);
});
