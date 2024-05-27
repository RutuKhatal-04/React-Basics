import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComponents from "./PureComponents";
import MemoComp from "./MemoComp"; //for trying memo jsut remove purecomponent from import in line 1
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nikita",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Nikita",
      });
    }, 2000);
  }

  render() {
    console.log("**************Parent component**********************");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComponents name={this.state.name}></PureComponents> */}
      </div>
    );
  }
}

export default ParentComp;

// Regular Components: - Is rerendered
// Pure Compoenents: -Is not rerendered

// Regular Component: A regular component does not implement the shouldComponentUpdate PaymentMethodChangeEvent. It always return true by default
// Pure Component : A pure Component on the other hand implements shouldComponentUpdate with shallow props and state comparision
// (it does the shallow comparision of pervState with currentState
// shallow comparision of pervProps with currentProps
// ) <- if difference is there then component is rerenderd
//  there fore in console purecomp is renders once and not rederendered like regular comp bcz it check whether name or props changes it is not chnging thus it doesnt rerender

// if the parentcomp is purecomp and the props or shallow comparision are not chnage the the child comp of that parent comp also doesnt rerenderd

// Shallow Comparisions(SC)
// Primitives Types -
//     1) a(sc) b return true if a and b have same value and are of the same type
//  ex string "Nikita " (sc) string "Nikita" RETURN TRUE

// Complex Types -
// 1)a (sc) b return true if a and b reference the exact same object .
// var a = [1, 2, 3];
// var b = [1, 2, 3];
// var c = a;
// var ab = (a === b) //false
// var ac = (a===c) //true
