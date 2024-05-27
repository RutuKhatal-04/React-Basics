//Context provides a way to pass data through the component tree without having to pass props down manually at entry level
//Context Api can solve that prb
// Steps to implement while making a useContext

// 1)Create a useContext
// 2)Provide a context value
// 3)Consume the context value

import React from "react";

const UserContext = React.createContext("codeEvaluation");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;

//Steps 1
// import React from "react";

// const UserContext = React.createContext();
// const UserProvider = Context.Provider;
// const UserConsumer = Context.Consumer;

// export { UserProvider, UserConsumer };

//We can set default value to thee context and it is passed as an argument to the createContext method
// default value only be accessed when a provider is not above the component in App.js
