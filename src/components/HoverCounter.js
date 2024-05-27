import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  IncrementCount = () => {
    this.setState((PrevState) => {
      return {
        count: PrevState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.IncrementCount}>Hover {count} Times</h2>
      </div>
    );
  }
}

export default HoverCounter;
