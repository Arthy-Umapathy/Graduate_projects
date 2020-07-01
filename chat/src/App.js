import React from "react";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";

import SendMessage from "./components/SendMessage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <RoomList />
        {/* <MessageList /> */}
        {/* <SendMessageForm /> */}
        {/* <NewRoomForm /> */}

        <SendMessage />
      </div>
    );
  }
}

export default App;