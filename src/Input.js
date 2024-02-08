import React, { useState } from "react";

function Input() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print</button>
      {print ? <h2>{data}</h2> : null}
    </>
  );
}

export default Input;
