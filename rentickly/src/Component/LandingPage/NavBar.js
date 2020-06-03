import React from "react";
import { NavLink } from "react-router-dom";
import "react-bootstrap/Collapse";
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <NavLink to="/" className="navbar-brand">
            Rental App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Help">
                  Help
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FAQs">
                  FAQs
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
      </div>
    );
  }
}

export default NavBar;
