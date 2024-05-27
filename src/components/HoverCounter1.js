import React, { Component } from "react";
import UpdatedComponent from "./HigherOrderComp";
class HoverCounter1 extends Component {
  render() {
    // const { count } = this.state;

    const { count, IncrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={IncrementCount}> Hover {count} Times</h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter1, 5);

// props passed doesnt goes to HoverCounter1 it come to hoc
