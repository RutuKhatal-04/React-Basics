//JSX
// JavaScript XML(JSX) - is extension language syntax
// write xml like code for element and componet using react library
// JSX tag have tag name, attribute, Children
// JSX is not a necessity to write React applications
// JSX make your react code simpler and elegant
// JSX ultimately transpiles to pure javascript which is understood by  the browser

import React from "react";

//This is JSX version of Hello Component
// const Hello = () => {
//   return (
//     <div>
//       <h1>Hello JSX</h1>
//     </div>
//   );
// };

//Without using JSX

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", class: "jsx" }, //in console we get id for div tag as hello
    React.createElement("h1", null, "Without using jsx")
  );
};
export default Hello;

//here createElement function can take any number of parameters
// its first parameter is string which specifies the html tag to be rendered
// 2nd parameter is any optional properties like class,id etc
// 3rd parameter is children for html element here its children for the div tag
