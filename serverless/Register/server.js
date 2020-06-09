const express = require("./node_modules/express");
const morgan = require("./node_modules/morgan");
const bodyparser = require("./node_modules/body-parser");

const app = express();
// app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static("./reg"));

app.use(morgan("short"));

const router = require("./routes/users.js");

app.use(router);

app.listen(5006, () => {
  console.log("Server is running on port:" + 5006);
});
