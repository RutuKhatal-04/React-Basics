import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={IncrementCount}>Cliked {count} times</h2>
      </div>
    );
  }
}

export default HoverCounter2;
