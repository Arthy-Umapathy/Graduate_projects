import React, { Component } from "react";
import axios from "axios";
import Movies from "./Movies";
import "../App.css"

class AutoSearch extends Component {
  state = {
    query: "",
    results: [],
  };

  async getInfo() {
    const { data: results } = await axios.get(
      `https://api-tutorial4.herokuapp.com/movies?title_like=${this.state.query}`
    );

    this.setState({ results });
  }
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1)
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          } else if (!this.state.query) {
            
          }
      }
    );
  };

  render() {
    return (
      <form style={{ marginBottom:"2rem" }}>  
        <input className="form__input"
          placeholder="Search Movies.."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        {<Movies results={this.state.results} />}
      </form>
    );
  }
}

export default AutoSearch;
