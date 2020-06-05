import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import NavBar from "../LandingPage/NavBar";
import { Col } from "react-bootstrap";

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
  state = {
    userName: "",
    password: "",
    usersJson: {},
  };
  componentDidMount() {
    this.setState({ usersJson });
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value,
    });

  onFormSubmit = (e) => {
    e.preventDefault();
    const { usersJson, userName, password } = this.state;
    const filterUserName = Object.keys(usersJson.users).filter(
      (e) => e === userName
    );
    if (
      filterUserName.length > 0 &&
      usersJson.users[userName].password === password
    ) {
      this.props.history.push("test");
      window.localStorage.setItem(
        "user",
        JSON.stringify(usersJson.users[userName])
      );
    } else {
      alert("Wrong login or password");
    }
  };
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.onFormSubmit}>
                    <p className="h4 text-center py-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
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
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        getValue={(value) =>
                          this.getLoginData(value, "password")
                        }
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        color="cyan"
                        type="submit"
                        onClick={this.onFormSubmit}
                      >
                        Login
                      </MDBBtn>
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
