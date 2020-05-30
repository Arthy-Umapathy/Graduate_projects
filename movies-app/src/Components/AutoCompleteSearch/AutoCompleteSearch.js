import React, { Component } from "react";
import "./AutoComplete.css";
import CardsComponent from "../CardComponent/CardsComponent"

class AutoCompleteSearch extends Component {
  constructor(props) {
    super(props);
    this.recipes = [
      "Dal Makhani",
      "Paneer Makhani",
      "Malai Kofta",
      "Afghani Chaat",
      "Shahi Paneer Masala",
      "Muttar Masala",
      "Butter Chicken",
    ];

    this.state = {
      recipeSuggestions: [],
      squery: "",
      showCardsComponent: false,
    };
  }

  // This method will handle the text change event as soon as user start typing query in the search input field
  onTextQueryChanged = (event) => {
    const value = event.target.value;
    let recipeSuggestions = [];
    if (value.length > 0) {
      // Using Regex Pattern the recipe suggestions will be displayed after it gets filtered from the original list
      const searchPattern = new RegExp(`^${value}`, "i");
      recipeSuggestions = this.recipes
        .sort()
        .filter((v) => searchPattern.test(v));
    }
    this.setState(() => ({ recipeSuggestions, squery: value }));
  };

  // On clicking specific recipe item from the dropdown list, it would update the state
  // 1. sets the selected recipe text in the search field
  // 2. Also the suggestion list is emptied to ensure if user starts searching again
  // it does not get any wrong suggestions
  // 3. When the user clicks a item from the dropdown, showCardsComponent boolean is changed to
  // to display "Cards Components" which will show all the Cards.
  suggestionRecipeSelected(value) {
    this.setState(() => ({
      squery: value,
      recipeSuggestions: [],
      showCardsComponent: true,
    }));
    return true;
  }

  // This method handles the search suggestions on text change inside the search input field
  renderSearchSuggestions() {
    const { recipeSuggestions } = this.state;
    if (recipeSuggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {recipeSuggestions.map((recipes) => (
          <li onClick={() => this.suggestionRecipeSelected(recipes)}>
            {recipes}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { searchQuery } = this.state;
    let cards;
    if (this.state.showCardsComponent === true) {
      cards = <CardsComponent recipeName={this.state.squery} />;
    }
    return (
      <div>
        <div className="AutoCompleteSearch">
          <input
            value={searchQuery}
            onChange={this.onTextQueryChanged}
            type="squery"
          />
          {this.renderSearchSuggestions()}
        </div>
        {cards}
      </div>
    );
  }
}

export default AutoCompleteSearch;
