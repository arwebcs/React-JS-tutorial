import React, { useRef } from "react";

function UnControlledComponent() {
  let inputRef = useRef(0);
  let inputRef2 = useRef(0);
  function submitForm(e) {
    e.preventDefault();
    console.log(`input 1: ${inputRef.current.value}`);
    console.log(`input 2: ${inputRef2.current.value}`);
  }
  return (
    <>
      <h1>Un controlled Component</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />
        <input ref={inputRef2} type="text" />
        <button>Save</button>
      </form>
    </>
  );
}

export default UnControlledComponent;
