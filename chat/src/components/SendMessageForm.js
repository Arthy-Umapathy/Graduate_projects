import React from "react";

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.message.length === 0) {
      return;
    }
    const newMessage = {
      message: this.state.message,
    };
    /** send off the message */
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
      </form>
    );
  }
}

export default SendMessageForm;
