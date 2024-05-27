import React, { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button onClick={IncrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter2;
