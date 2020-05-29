import React from "react";

//example of event handler -1

// function handleClick() {
//   console.log("I was clicked");
// }

// function App2() {
//   return (
//     <div>
//           <img onMouseOver={() => console.log("Hovered!")}src="https://dal.brightspace.com" />
//       <br />
//       <br />
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

//incrementing the count on click
class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}
export default App2;
