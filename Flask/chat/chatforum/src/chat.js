import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

let endPoint = "https://localhost:5000";
let socket = openSocket(`${endPoint}`);

const Chat = () => {
  const [messages, setMessages] = useState(["Hello and Welcome"]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessages();
  }, [messages.length]);

  const getMessages = () => {
    socket.on("message", (msg) => {
      setMessages([...messages, msg]);
    });
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  const onClick = () => {
    if (message !== "") {
      socket.emit("message", message);
      setMessage("");
    } else {
      alert("Please add a message");
    }
  };

  return (
    <div>
      {messages.length > 0 &&
        messages.map((msg) => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
      <input value={message} name="message" onChange={(e) => onChange(e)} />
      <button onClick={() => onClick()}>Send Message </button>
    </div>
  );
};
export default Chat;
