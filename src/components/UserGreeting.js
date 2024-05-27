//Conditional Rendering

// Note : If-else statement doesnt works inside jsx bcz jsx is syntactic sugar for function call and obejct construction
// in short the return statement will not hav the if else

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //using element variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Yashwi</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div> { message }</div >;

    //Basic if else approach (1)
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Yashwi</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    //   }

    //normal
    // return (
    //   <div>
    //     <div>Welcome Yashwi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );

    //3rd terenary conditional operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Yashwi</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //4th short circuit operator
    return this.state.isLoggedIn && <div>Welcome Yashwi</div>;
  }
}

export default UserGreeting;

// total 4 appraoches
// 1) Ifelse appraoches
// 2)Element variable - in this declare the variable which will store the element to be rendered
// 3)Terenary conditional operator
//4)Short circuit operator--- used when u want to return something or nothing
