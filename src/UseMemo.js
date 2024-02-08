import { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("Call");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h1>Use memo prevents re-rendering</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      {multiCountMemo}
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update item</button>
    </>
  );
}

export default UseMemo;
