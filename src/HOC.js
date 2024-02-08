import { useState } from "react";

function HOC() {
  return (
    <>
      <h1>High order component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </>
  );
}

function HOCRed(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "red" }}>
        <props.cmp />
      </h2>
    </>
  );
}
function HOCGreen(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "green" }}>
        <props.cmp />
      </h2>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update counter</button>
    </>
  );
}
export default HOC;
