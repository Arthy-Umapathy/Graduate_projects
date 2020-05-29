import React from "react";

class Form1 extends React.Component {
  constructor() {
    super();
      this.state = {
          firstName: "",
          lastName: "",
          textbox:"",
          isFriendly: false,
          gender: "",
          favColor: "blue",
          submit:false
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        const { name, value,type,checked } = event.target
        type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})
    }
    handleSubmit(event) {
        this.setState({ submit: true })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <input type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="FirstName"
                onChange={this.handleChange} />
        <br />
            <input type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="LastName"
                onChange={this.handleChange} />
            <br />
            <textarea
                value={this.state.texbox} 
                name="textbox"
                onChange={this.handleChange} />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                />
                Is friendly?
            </label>
            <br/>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                />
                Male
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                />
                Female
            </label>
            <br />
            <label> Favorite Color:</label>
            <select 
                value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
            >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">yellow</option>
                </select>
        
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h2> you are a {this.state.gender}</h2>
            <h2> Your favorite color is {this.state.favColor}</h2>
            <button>Submit</button>
        </form>
    );
  }
}

export default Form1
