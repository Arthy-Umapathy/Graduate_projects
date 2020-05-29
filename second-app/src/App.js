import React, { Component } from "react";

// Class component example 1

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "arthy",
//       age: 21,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>What is the name: {this.state.name}</h1>
//         <h1>What is the age: {this.state.age}</h1>
//         {/* <ChildComponent answer={this.state.answer} /> */}
//       </div>
//     );
//   }
// }

//class component example 2
// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn:false
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>You are currently logged: {this.state.isLoggedIn? "in" : "out"}</h1>
//       </div>
//     );
//   }
// }

//class component example 3
// import TodoItem from "./Components/TodoItem";
// import todosData from "./Components/todosData";

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render() {
//     const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} value={item.value}/>);
//     return <div className="todo-list">{todoItems}</div>;
//   }
// }

// export default App;
