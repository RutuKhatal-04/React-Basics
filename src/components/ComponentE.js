import React, { Component } from "react";
import ComponentF from "./ComponentF.js";
import UserContext from "./Context.js";
class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
        Component E context to check context type {this.context}
      </div>
    );
  }
}

ComponentE.contextType = UserContext;
export default ComponentE;
