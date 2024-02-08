import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>React router v6.0</h1>
      <h3>npm install react-router-dom</h3>
      <p>This is a Home page of our app</p>
      <Link to="/about"> About</Link>
    </>
  );
}

export default Home;
