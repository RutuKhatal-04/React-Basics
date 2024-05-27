import React from "react";

// without using arrow function
// function Greet() {
//   return <h1>Hello Dear</h1>;
// }

//With using arrow function

const Greet = () => <h1>Hello </h1>;
export default Greet;

//Here we are exporting the component to import it inot app.js
// in app.js we can import it with any name it will give same output only

// There is another way to export called as name export
// export Greet = () => <h1>Hello</h1>
// using this export keyword but using this while importing it in app.js we can not use any other name we have to use the same name as Greet here
