import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    console.log(`${name}, ${tnc}, ${interest}`);
    e.preventDefault();
  }
  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>{" "}
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.value)} />
        <span>Accept terms</span>
        <br />
        <br />
        <button type="submit"> Save</button>
      </form>
    </>
  );
}

export default Form;
