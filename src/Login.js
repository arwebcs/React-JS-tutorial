import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("Recorrect errors");
    } else {
      alert("All ok");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let user = e.target.value;
    if (user.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }

    setUser(user);
  }
  function passwordHandler(e) {
    let pass = e.target.value;
    if (pass.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(pass);
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={userHandler}
        />
        <span>{userErr ? "User logged valid" : ""}</span>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter password"
          onChange={passwordHandler}
        />{" "}
        <span>{passErr ? "Password wrong" : ""}</span>
        <br />
        <br />
        <button type="submit"> Save</button>
      </form>
    </>
  );
}

export default Login;
