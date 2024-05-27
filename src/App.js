import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Propsexp from "./components/Propsexp";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form.js";
import LifecycleA from "./components/LifecycleA.js";
import FragmentDemo from "./components/FragmentDemo.js";
import Tables from "./components/Tables.js";
import PureComponents from "./components/PureComponents.js";
import ParentComp from "./components/ParentComp.js";
import RefsDemo from "./components/RefsDemo..js";
import RefinClass from "./components/RefinClass.js";
import FocusInput from "./components/FocusInput.js";
import ForwardRefParent from "./components/ForwardRefParent.js";
import Portals from "./components/Portals.js";
import Error from "./components/Error.js";
import ErrorBound from "./components/ErrorBound.js";
import ClickCounter from "./components/ClickCounter.js";
import HoverCounter from "./components/HoverCounter.js";
import ClickCounter1 from "./components/ClickCounter1.js";
import HoverCounter1 from "./components/HoverCounter1.js";
import ClickCounter2 from "./components/ClickCounter2.js";
import HoverCounter2 from "./components/HoverCounter2.js";
import User from "./components/User.js";
import RenderProps from "./components/RenderProps.js";
import { UserProvider } from "./components/Context.js";
import ComponentC from "./components/ComponentC.js";
import HttpGet from "./components/HttpGet.js";
import HttpPost from "./components/HttpPost.js";
function App() {
  return (
    <div className="App">
      {/* <Greet />

      <Welcome /> */}
      {/* <Hello /> */}
      {/* how props are used */}
      {/* <Propsexp name="Example1" id="101">
        <p>Unknown content to be passed</p>
        <p>This is children props</p>
      </Propsexp>
      <Propsexp name="Ex" id="102" />
      <Propsexp name="Exp" id="103" /> */}
      {/* <Message /> */}
      {/* <Counter />
       */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={false} /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className="styles.success">Success</h1> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <RefinClass /> */}
      {/* <FocusInput /> */}
      {/* <ForwardRefParent /> */}
      {/* <Portals /> */}
      {/* <ErrorBound>
        <Error heroname="Batman" />
      </ErrorBound>
      <ErrorBound>
        <Error heroname="Superman" />
      </ErrorBound>
      <ErrorBound>
        <Error heroname="Joker" />
      </ErrorBound> */}
      {/* <ClickCounter name="Nikita " />
      <HoverCounter />
      <ClickCounter1 />
      <HoverCounter1 name="Nikita " /> */}
      {/* 
      <ClickCounter2 />
      <HoverCounter2 /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "Nikita" : "Guest")} /> */}
      {/* <RenderProps
        render={(count, IncrementCount) => (
          <ClickCounter2
            count={count}
            IncrementCount={IncrementCount}
          ></ClickCounter2>
        )}
      /> */}
      {/* this is children will be access as this.props.children */}
      {/* <RenderProps>
        {(count, IncrementCount) => (
          <HoverCounter2
            count={count}
            IncrementCount={IncrementCount}
          ></HoverCounter2>
        )}
      </RenderProps> */}

      {/* <UserProvider value="Nikita">
        <ComponentC />
      </UserProvider> */}
      {/* <HttpGet /> */}
      <HttpPost />
    </div>
  );
}

export default App;
