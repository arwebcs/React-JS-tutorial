import { useState } from "react";

function User() {
  const [nameData, setData] = useState("AA");

  let data = "Arghya";
  function apple() {
    data = "X";
    alert(data);
  }
  function updateData() {
    setData("BB");
  }
  return (
    <>
      <h1>
        Functional component : User component : {data} {nameData}
      </h1>
      <button onClick={() => apple()}>Click me</button>
      <button onClick={apple}>Click me</button>
      <button onClick={updateData}>State</button>
    </>
  );
}

export default User;
