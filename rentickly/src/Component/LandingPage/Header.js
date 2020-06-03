import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import history from "./History";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import SignIn from "../Login/SignIn";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    browserHistory.push("/SignIn");
  }

  render() {
    return (
      <header
        className="jumbotron jumbotron-fluid text-center"
        style={{ marginBottom: 0 }}
      >
        <h1> Rentickly </h1>
        <p>Get your Home quickly with Rentickly</p>
        <div>
          <Link to="/SignIn">
            <MDBBtn
              type="button"
              gradient="blue"
              rounded
              className="btn-block z-depth-1a"
            >
              Sign In
            </MDBBtn>
          </Link>
        </div>
        <Body />
        <Footer />
      </header>
    );
  }
}
export default Header;
