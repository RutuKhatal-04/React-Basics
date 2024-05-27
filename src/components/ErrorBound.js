import React, { Component } from "react";
class ErrorBound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componenetDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBound;

// know using error boundary  if any occurs in the element in the errorboundary tag then in the output the ui of error element fallback and is visible separatly but if error boundary is not there then it doent shows the thrown error ui
// now to display the working element also then just take each element seperately in errorbound component tag
// which will disply the working and nonworking both parts

// Error Boundaries are react Component that catches javascript error in their child component TreeWalker, log those errors,adn display a fall back ui

// A class Component becomes an error boundary by defining either or both of getDerivedStateError and componenetDidCatch lifecycle methods

//The placement of the Error Boundary also matters as it controls if the entire app should have the fallback Ui or just the component causing the problem
