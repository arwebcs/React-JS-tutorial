import { useState } from "react";

function Conditional() {
  const [loggedIn, setLogin] = useState(3);
  return (
    <>
      {loggedIn == 1 ? (
        <h1>Arghya</h1>
      ) : loggedIn == 2 ? (
        <h1>fff</h1>
      ) : (
        <h1>Guest</h1>
      )}
    </>
  );
}

export default Conditional;
