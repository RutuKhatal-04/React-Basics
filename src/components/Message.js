// STATE
// state is managed within the component
// variables declared in the function body
// state can be changed
// useState Hook - Functional Components
// this.state - Class Components

import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super(); //to call the base class constructor bcz we extends the components class
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
//to change the state by some event so
// 1st step is to create a state object usually inside the class constructor
