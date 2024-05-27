// Error Boundary
// A class Component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch become an error Boundary

// The static method getDerivedStateFromError method is used to render a fallback UI after and error is thrown and the componentDidCatch method is used to log the error information

import React from "react";

function Error({ heroname }) {
  if (heroname === "Joker") {
    throw new Error("Not a Hero");
  }
  return <div>{heroname}</div>;
}

export default Error;

// Now in App.js if we pass heroname other than joker it works but if we pass 2 heroname and joker also then whole application crashes but we want only the error giving componenet to fallback and other component should unaffected

// Now use error boundary
