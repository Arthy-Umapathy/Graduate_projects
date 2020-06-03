import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
      </div>
    );
  }
}
export default LandingPage;
