import React from "react";
import "./Style/Navbar.css";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    // navigate("/");
    // setLogin(false);
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="marks">Marks</NavLink>
        </li>
        <li>
          <NavLink to="attendance">Attendance</NavLink>
        </li>
        <li>
          <NavLink to="/pay">Fee</NavLink>
        </li>
        <li>
          <NavLink to="/givefeedback">GiveFeedback</NavLink>
        </li>
      </ul>
      <button className="butt" onClick={logout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
