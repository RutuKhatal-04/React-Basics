import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      submit: "",
    };
  }
  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlerCommentChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handlerSubmitChange = (e) => {
    alert(`${this.state.username} ${this.state.comments}`);
    e.preventDefault(); //this prevents lost of data after refreshing
  };
  render() {
    return (
      <form onSubmit={this.handlerSubmitChange}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlerUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handlerCommentChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

//event.target.value is to take real time input and set it

// Steps
// Add the element html
// assign the component state to the element value
// assign the onchange handler to the updated state

// If we give same handler to both then what we give input in one the same is reflected to other
