import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComp";
class ClickCounter1 extends Component {
  render() {
    // const { count } = this.state;
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button onClick={IncrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter1, 1);
