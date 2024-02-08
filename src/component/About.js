import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <p>This is a About page of our app</p>
      <Link to="/"> Home</Link>
      <Link to="/user/arghya" state={{ name: "aaa" }}>
        {" "}
        User
      </Link>
      <br />
      <button onClick={() => navigate("/")}>Go to home</button>{" "}
      <button onClick={() => navigate("/filter")}>Go to Filter</button>
    </>
  );
}

export default About;
