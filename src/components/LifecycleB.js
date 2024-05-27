import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "swati",
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB  componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecycle B shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle B getsnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB </div>;
  }
}

export default LifecycleB;
