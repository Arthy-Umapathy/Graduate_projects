import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="links">
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
