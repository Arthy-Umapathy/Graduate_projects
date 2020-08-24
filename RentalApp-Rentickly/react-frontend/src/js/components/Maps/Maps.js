import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import NavBar from "../LandingPage/NavBar";
import { Card, Table } from "react-bootstrap";
import jwt_decode from "jwt-decode";

export class Maps extends Component {
  constructor(props) {
    super(props);

    // token to obtain logged in user
    const token = localStorage.access_token;
    const decoded = jwt_decode(token);

    this.state = {
      stores: [],
    };
  }

  async componentDidMount() {
    const url = "/storeLocation";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ stores: data });
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            marginBottom: "50px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Property Type</th>
                <th>Property Address </th>
                <th>Property Description </th>
                <th>Rent </th>
                <th>Property Location </th>
              </tr>
            </thead>
            <tbody>
              {this.state.stores.map((item, index) => (
                <tr key={index}>
                  <td>{item.adTitle}</td>
                  <td>{item.propertyType}</td>
                  <td>{item.propertyAddress}</td>
                  <td>{item.propertyDescription}</td>
                  <td>{item.rentAmount}</td>
                  <td>{item.propertyLocation}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Card style={{ height: "28rem" }}>
            <Card.Body>
              <Map
                google={this.props.google}
                zoom={14}
                style={{ width: "98%", height: "25rem" }}
                className="overflow-auto"
                initialCenter={{ lat: 44.648618, lng: -63.5859487 }}
              >
                {this.displayMarkers()}
              </Map>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_em-xc2RW-31MoqE7vCWA2Dyv6ILjEiI",
})(Maps);
