import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button>  */}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
      {/* to pass parameter then use arrow function */}
    </div>
  );
}

export default ChildComponent;
