import React, { Component } from "react";

// USING FUNCTIONAL COMPONENTS
// const Propsexp = (props) => {
//   return (
//     <div>
//       <h1>
//         Props {props.name} que num is {props.id}
//       </h1>
//       {props.children}
//     </div>
//   );
// };
// export default Propsexp;
// pass props keyword as agrument
//then use props.property name in the curly brace

// to write more than 1 line in return statement then write it in braces
//jsx should contain only one wrapper elements thus we wrap all elements in one tag as div tag here

//With using class components

class Propsexp extends Component {
  render() {
    return (
      <div>
        <h1>
          Props {this.props.name} que num is {this.props.id}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default Propsexp;

//using class we have to use this.props.propertyname
