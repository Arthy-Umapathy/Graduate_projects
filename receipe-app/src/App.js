import React, { Component } from "react";
import "./App.css";
import Form from "./Component/Form";

class App extends Component {
  state = {
    receipes: [],
  };
  getRecipe =async (event) => {
    const recipeName = event.target.elements.receipeName.value;
    event.preventDefault();
    const api_call = await fetch(
      `https://api-tutorial4.herokuapp.com/movies?title-like=${recipeName}`
    );
    const data = await api_call.json();
    this.setState({ receipes: data });
    console.log(this.state.receipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.receipes.map((recipe) => {
          return <p key={recipe.show_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
