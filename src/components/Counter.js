import React, { Component } from "react";

//Note we dont use the current state(this.state.count) we use the previous state (this.setState((prevState) => ({
//   count: prevState.count + 1,
// }));)

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

   Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );

    this.setState((prevState, props) => ({
      count: prevState.count + 1,
      //count:prevState.count+props.addvalue if provided
    }));
    console.log(this.state.count);
  }

  IncrementFive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={() => this.IncrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

//here the value in console is 1 less than on the browser output this is bcz console.log is executed before the value is updated
// so if we want to execute any operation only after the updation of state then pass another value as parameter of setState method

//react may grp multiple setState call into single update for better performance
// here what happens if we pass obj(count: this.state.count + 1,)to the setState method
// it grps the mutile setSate call and provide updated value once
// 00000 update 1 in this Way

// so now pass function to the setState method to resolve the issue so comment part was previsos code for above output

//NOTE
// Always make use of setState and never modify the state directly
// Code has to be executed after the state has been updated ? place that code in the call back function which is the second argument to the setState method
// When you have to update state based on the previous state value , passin a function as an argument instead of the regular object
