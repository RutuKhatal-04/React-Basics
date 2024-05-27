//refs make it possible to access DOM nodes directly within react
//when the form is loaded we want by default the input field to be focused lets try this
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  // it is common to createRef in the constructor so that they can be refered through out the component
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

// 1)to create new property using a createRef in constructor
// 2)Attach this ref to the input element in render methdo it is done using reserved keyword "ref" with curlybrace and ref property
// 3)add focus method
