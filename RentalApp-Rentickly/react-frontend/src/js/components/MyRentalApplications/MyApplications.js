// Author: Siddharth Anikar
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import NavBar from "../LandingPage/NavBar";
import jwt_decode from "jwt-decode";

export default class MyApplications extends Component {
  constructor(props) {
    super(props);
  
    // token to obtain logged in user
    const token = localStorage.access_token;
    const decoded = jwt_decode(token);

    this.state = {
      userId: decoded.identity.userid,
      items: [],
    };
  }

  // Calling "myapplications" API to fetch user's submitted applications
  async componentDidMount() {
    const url = "/myapplications/";
    const response = await fetch(url + this.state.userId);
    const data = await response.json();

    this.setState({ items: data });

    console.log(data);
  }

  render() {
    return (  
      <div>
        <NavBar />

        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Phone </th>
                <th>Date of Birth </th>
                <th>Employment Status </th>
                <th>Current Employer </th>
                <th>Monthly Income </th>
                <th>File Uploaded </th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.dob}</td>
                  <td>{item.status}</td>
                  <td>{item.employer}</td>
                  <td>{item.income}</td>
                  <td>{item.files}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
