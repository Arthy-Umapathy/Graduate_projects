import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <script
      src="https://unpkg.com/react/umd/react.production.min.js"
      crossorigin
    ></script>

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin
    ></script>

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin
    ></script>

    <script>var Alert = ReactBootstrap.Alert;</script>

    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
