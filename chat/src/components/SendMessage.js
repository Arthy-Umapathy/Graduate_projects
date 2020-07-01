import React from "react";
import DisplayList from "./DisplayList";
class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>POSTINGS</h3>
        <DisplayList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="send-message-form">
          
          <input
            placeholder="Type your comment here"
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}
export default SendMessage;
