import React from "react";
import "./myStyle.css";
function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className="primary">Hello</h1>
      {/*hello in orange color*/}
      <h1 className={className}>Hello</h1> {/*hello in black color*/}
      {/* now if i want to specifiy more than 1 class then use backticks */}
      <h1 className={`${className} font-xl`}>Hello</h1>
    </div>
  );
}

export default Stylesheet;

//className is a variable value so put it in $ and curlybraces
