import React, { useState } from "react";

function ControlledComponent() {
  let [val, setVal] = useState(0);
  return (
    <>
      <h1>Controlled Component</h1>
      <input
        type="text"
        value={val}
        defaultValue="000"
        onChange={(e) => setVal(e.target.value)}
      />
      {val}
    </>
  );
}

export default ControlledComponent;
