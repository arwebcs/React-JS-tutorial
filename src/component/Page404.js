import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1>Page404</h1>
      <p>This is a 404 page of our app</p>
      <Link to="/"> Home</Link>
    </>
  );
}

export default Page404;
