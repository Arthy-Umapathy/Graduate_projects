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

const FormPage = () => {
  return (
    <div>
      <br />
      <div>
        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Register</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Confirm your email"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit">
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default FormPage;
