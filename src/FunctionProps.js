import React from "react";

function FunctionProps(props) {
  return (
    <>
      <h1>Function props</h1>
      <button onClick={() => props.data()}>Call data function</button>
    </>
  );
}

export default FunctionProps;
