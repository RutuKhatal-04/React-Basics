import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "swati",
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA  componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getsnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codeevaluation",
    });
  };
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA </div>
        <button onClick={this.changeState}>changeState</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
