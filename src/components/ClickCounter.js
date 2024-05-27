import React, { Component } from "react";

class ClickCounter extends Component {
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
        <button onClick={this.IncrementCount}>
          {this.props.name}Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
