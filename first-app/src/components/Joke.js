import React from "react";

function Joke(props) {
  return (
    <div>
      <h3 style={{display: !props.value.question && "none"}}> Question:{props.value.question} </h3>
      <h3 style={{color: !props.value.question && "grey"}}> answer:{props.value.answer} </h3>
      <hr/>
    </div>
  );
}

export default Joke;
