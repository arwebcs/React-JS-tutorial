// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import HOC from "./HOC";
// import UnControlledComponent from "./UnControlledComponent";
// import ControlledComponent from "./ControlledComponent";
// import RefUse from "./RefUse";
// import UseMemo from "./UseMemo";
// import PureComponents from "./PureComponents";
// import ChildToParent from "./ChildToParent";
// import Reuse from "./Reuse";
// import Arrays from "./Arrays";
// import BootstrapCSS from "./BootstrapCSS";
// import ClassLifeCycle from "./ClassLifeCycle";
// import Hooks from "./Hooks";
// import Style from "./Style";
// import FunctionProps from "./FunctionProps";
// import User from "./User";
// import Profile from "./Profile";
// import Student from "./Student";
// import Input from "./Input";
// import React, { useState } from "react";
// import Form from "./Form";
// import Conditional from "./Conditional";
// import Login from "./Login";

function App() {
  // let data = "XXX";
  // const [name, setName] = useState("");

  // function getPropFunction() {
  //   alert("Heelo from App");
  // }
  // function parentAlert(childVal) {
  //   alert(childVal);
  // }

  // let inputRef = useRef(null);
  // function updateInput() {
  //   inputRef.current.value = 10000;
  // }
  return (
    <div className="App">
      {/* <User />
      <Profile /> */}
      {/* <Student
        name={name}
        email={"arghya@gmail.com"}
        other={{ add: "Tripura", zip: "799001" }}
      />
      <button
        onClick={() => {
          setName("AAA");
        }}
      >
        Update
      </button> */}
      {/* <Input /> */}
      {/* <Form /> */}
      {/* <Conditional /> */}
      {/* <Login /> */}
      {/* <FunctionProps data={getPropFunction} /> */}
      {/* <ClassLifeCycle name={name} /> */}
      {/* <button
        onClick={() => {
          setName("Arghya");
        }}
      >
        Update
      </button> */}

      {/* <Hooks /> */}

      {/* <Style /> */}
      {/* <BootstrapCSS /> */}
      {/* <Arrays /> */}
      {/* <Reuse /> */}
      {/* <ChildToParent alert={parentAlert} /> */}
      {/* <PureComponents /> */}
      {/* <UseMemo /> */}
      {/* <RefUse /> */}
      {/*<RefUse ref={inputRef} />
      <button onClick={updateInput}>Update input</button>*/}

      {/* <ControlledComponent /> */}
      {/* <UnControlledComponent /> */}
      <HOC />
    </div>
  );
}

export default App;
