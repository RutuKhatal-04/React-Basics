import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }

  return ( 
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;

// here for clickHandler it is function on a function call we had not provided ( ) braces
// if the braces are present event is not happening
// Event Handler is a function not a function call so dont add parenthesis
