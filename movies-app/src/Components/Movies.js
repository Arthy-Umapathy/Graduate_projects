import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const Movies = (props) => {
  // const options = props.results.map((r) => (
  //   <div key={r.show_id}className="recipe__box">
  //     <div className="recipe__text">
  //       <h5>{r.title}</h5>
  //     </div>
  //   </div>
  // ));

  const options = props.results.map((r) => (
    <Router>
      <div key={r.show_id} className="recipe__box">
        <div className="recipe__text">
          <h5>{r.title}</h5>
        </div>
      </div>
    </Router>
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">{options}</div>
      </div>
    </div>
  );
};

export default Movies;