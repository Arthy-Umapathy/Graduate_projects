import React from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { response } from "express";

const usersJson = {
  description: "Login and passwords of users",
  users: {
    testUser: {
      password: "test",
      type: "test",
    },
  },
};

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mail: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        this.setState(
          { name: response.data.user_name },
          { mail: response.data.email }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.onFormSubmit}>
                    <p className="h4 text-center py-4">Log in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        getValue={(value) =>
                          this.getLoginData(value, "userName")
                        }
                      />
                      <MDBInput
                        label="Type your email"
                        group
                        type="text"
                        validate
                        getValue={(value) => this.getLoginData(value, "email")}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <Link to="/Welcome">
                        <MDBBtn
                          color="cyan"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          Login
                        </MDBBtn>
                      </Link>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SignIn;
