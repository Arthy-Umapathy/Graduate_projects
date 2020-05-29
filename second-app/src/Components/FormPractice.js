import React from "react";

class FormPractice extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      isVegan: false,
      isKosher: false,
      isGuletin: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />
          Vegan?
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={this.state.isKosher}
            onChange={this.handleChange}
          />
          Kosher?
        </label>
        <label>
          <input
            type="checkbox"
            name="isGuletin"
            checked={this.state.isGuletin}
            onChange={this.handleChange}
          />
          Guletin?
        </label>

        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name:{this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age:{this.state.age}</p>
        <p>Your gender:{this.state.gender}</p>
        <p>Your destination:{this.state.location}</p>
        <p>Your dietary restricions:</p>
        <p>Vegan:{this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher:{this.state.isKosher ? "Yes" : "No"}</p>
        <p>Guletin:{this.state.isGuletin ? "Yes" : "No"}</p>
      </form>
    );
  }
}

export default FormPractice;
