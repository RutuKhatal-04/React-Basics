import React, { Component } from "react";

class RenderProps extends Component {
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
    return (
      <div>{this.props.render(this.state.count, this.IncrementCount)}</div>
      // this above is for ClickCounter2 but if we want for HiverCounter2 then at the place of render write children this.props.children
      // As props with in the element is called children element
    );
  }
}

export default RenderProps;
