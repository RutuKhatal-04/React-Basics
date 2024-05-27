//Portals provide a way to render children into a DOM node that exist outside the DOM heirarchy of the parent component

// every single application false under root element means inside the div tag of id root . Portals have ability to break down the DOM tree
// how to use portals
// inside public folder in indexedDB.html create a div tag of id portal-root
// step 2 create a mew component of Portals
// step 3 import ReactDOM and in render method return ReactDOM.createPortal

import React from "react";
import ReactDOM from "react-dom";
function Portals() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default Portals;

// early all element were comminginside the div element of if root now using portal we break that and created new one div tag with differen id and now new div tag consisit of all other elements
//study more