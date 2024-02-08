import React, { useState, useEffect } from "react";

function Hooks() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log("Called with data");
  }, [data]);

  useEffect(() => {
    console.log("Called with count");
  }, [count]);

  return (
    <>
      <h1>Hooks </h1>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      {/* <button onClick={() => setData("Dey")}>Update</button> */}
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setData(data + 1)}>Update data</button>
    </>
  );
}

export default Hooks;
