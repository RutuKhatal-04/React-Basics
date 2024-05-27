import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this); //3rd approach to bind in constructor
  }

  // method is commented to show the final approach of event binding
  //   clickHandler() {
  //     // this.setState({
  //     //   message: "GoodBye",
  //     // });  this give error bcz this keyword is undefined in eventhandler thus eventbinding is necessary in react class components

  //     this.setState({
  //       message: "GoodBye",
  //     });
  //   }

  //4th approach is using arrow funtion in defining method

  clickHandler = () => {
    this.setState({
      message: "Good Bye!",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* //for 1st approach comment any one to use */}

        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* 2nd approach of arrow function */}

        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* 3rd approach button  */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// initialy we use to write this.clickHandler
// now to bind the Eventhandler we use bind keyword with this as parameter

// 1st Approach is binding in the render method
// 2nd Approach is using arrow function here we call the eventhandler thus we provdie parenthesis to call the eventhandler

//3rd appraoch is to do binding in constructor instead of render method

//4th approach is to use arrow function as class property
// by changing the way to define a method in the class
