import React, { Component } from "react";
import "./App.css";
import AutoSearch from "./Components/AutoSearch";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Search for Movie</h1>
        </header>
        <div className="AppComponentParentDiv"></div>
        <AutoSearch/>
      </div>
    );
  }
}

export default App;
