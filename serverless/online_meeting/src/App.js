import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Register from "./Component/Register";
import Login from "./Component/Login";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
