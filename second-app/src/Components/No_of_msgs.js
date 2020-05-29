import React from "react";

class No_of_msgs extends React.Component {
  constructor() {
    super();
    this.state = {
      msgs: ["call mom", "buy eggs"],
    };
  }

  render() {
    return (
      <div>
        {this.state.msgs.length > 0 && (
          <h1> You have {this.state.msgs.length} messages</h1>
        )}
      </div>
    );
  }
}

export default No_of_msgs;
