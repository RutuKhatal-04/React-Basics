import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>{this.props.name(true)}</div>;
  }
}

export default User;

//Render props  - The term refers to a technique for sharing code between React components using a prop whose value is a function
