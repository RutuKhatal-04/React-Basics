import React, { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    console.log("Purecomponent");
    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureComponents;

//rpce snippet

