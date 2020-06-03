import React, { Component } from "react";
import NavBar from "../LandingPage/NavBar";
import { Link } from "react-router-dom";

class Help extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="conatainer">
          <br />
          <div>Got Questions?</div>
          <Link to="/FAQs">Check FAQs</Link>
        </div>
      </div>
    );
  }
}
export default Help;
