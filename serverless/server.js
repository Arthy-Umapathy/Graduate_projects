const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const app = express();
// app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static("./reg"));

app.use(morgan("short"));

const router = require("./routes/users.js");

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port:" + 3000);
});
