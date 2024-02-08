import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink className="navbarlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/user/arghya">
            User
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/filter">
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/nested">
            Nested
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
