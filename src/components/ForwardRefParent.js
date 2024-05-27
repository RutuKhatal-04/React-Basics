import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    );
  }
}

export default ForwardRefParent;

// Forwarding Ref Inputs class component should directly access the the input value
// Steps
// 1)create a ref in parent comp
// 2)Bind it with child input element in the render method
// 3)We need to forward this ref to input element in the child component forwardign can be achieved using forwarrd method in react library
