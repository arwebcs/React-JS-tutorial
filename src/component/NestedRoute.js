import { Link, Outlet } from "react-router-dom";
function NestedRoute() {
  return (
    <>
      <h1>Nested route</h1>
      <Link to="company">Company</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="client">Client</Link>
      <Outlet />
    </>
  );
}

export default NestedRoute;
