import React from "react";

import ForRent from "../../assets/ForRent.jpg";
import RentOut from "../../assets/RentOut.jpg";
import { Card } from "react-bootstrap";
import history from "./History";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <main className="container-fluid p-3 my-3 bg-dark text-white">
        <h2 className="subtitle">Rent or Lease</h2>
        <p className="intro">
          Rent or lease a house as you wish using Rentickly.. Get the desired
          house within few cliks
        </p>
        <div className="container">
          {/* <div className="col-sm-6" style={{height:500}} >
            <div className="card-left" >
              <img class="card-img-top" src={RentOut} alt="Rent Out Rooms" />
              <p className="card-title">Do you want to lease your property?</p>
              <p className="card-text">
                Post your property and promote your property as you wish..{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-right" >
              <img class="card-img-top" src={ForRent} alt="For Rent Rooms" />
              <p className="card-title">Do you want to rent a property?</p>
              <p className="card-text">Look for a rental room as you desired</p>
            </div>
          </div> */}
          <Card style={{ width: "20rem" }}>
            <Card.Img varient="top" src={ForRent} />
            <Card.Body>
              <Card.Title>Do you want to lease your property?</Card.Title>
              <Card.Text>
                Post your property and promote your property as you wish..
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img varient="top" src={RentOut} />
            <Card.Body>
              <Card.Title>Do you want to lease your property?</Card.Title>
              <Card.Text>
                Post your property and promote your property as you wish..
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Link to="/SignUp">
            <MDBBtn
              type="button"
              gradient="blue"
              rounded
              className="btn-block z-depth-1a"
              onClick={() => history.push("/SignUp")}
            >
              Sign Up
            </MDBBtn>
          </Link>
        </div>
      </main>
    );
  }
}
export default Body;
