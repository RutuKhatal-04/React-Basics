// Higher Order Component - HOC
//A pattern where a function takes a component as an argument and return a new component

// const newComponent = higherOrderComponent(originalComponent);
// Hoc adds additional data and functioanlity to the original component

import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    IncrementCount = () => {
      this.setState((PrevState) => {
        return {
          count: PrevState.count + incrementNumber,
        };
      });
    };
    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          IncrementCount={this.IncrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
