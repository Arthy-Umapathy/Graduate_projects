import React from "react";
import NavBar from "../LandingPage/NavBar";
function FAQ (props) {
  return (
    <div>
      <NavBar />
      <div>
        <h1>{props.faq.questions} </h1>
        <p>{props.faq.answers}</p>
      </div>
    </div>
  );
}
export default FAQ;
