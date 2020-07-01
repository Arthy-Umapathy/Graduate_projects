import React from "react";

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "Hey, how is it going?",
  },
  {
    senderId: "janedoe",
    text: "Great! How about you?",
  },
  {
    senderId: "perborgen",
    text: "Good to hear! I am great as well",
  },
  {
    senderId: "sfsd",
    text: "asdfadsfsdfa",
  },
];

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      message: DUMMY_DATA,
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.message);
    /** send off the message */
  }

  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
