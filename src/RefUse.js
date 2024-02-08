// import React, { Component, createRef } from "react";
import React, { useRef, forwardRef } from "react";
/*class RefUse extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    console.log((this.inputRef.current.value = "1000"));
  }
  getVal() {
    console.log(this.inputRef.current.value);
  }
  render() {
    return (
      <>
        <h1>Try to avoid using Ref. Only use in emergency </h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getVal()}>Click</button>
      </>
    );
  }
}*/

/*function RefUse() {
  let inputRef = useRef(null);
  function getVal() {
    console.log(inputRef.current.value);
  }
  return (
    <>
      <h1>Try to avoid using Ref. Only use in emergency </h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => getVal()}>Click</button>
    </>
  );
}*/

function RefUse(props, ref) {
  return (
    <>
      <h1>Try to avoid using Ref. Only use in emergency </h1>
      <input type="text" ref={ref} />
    </>
  );
}
// export default RefUse;
export default forwardRef(RefUse);
