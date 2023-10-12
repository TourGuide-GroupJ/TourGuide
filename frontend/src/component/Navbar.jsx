import React from "react";
import "./Navbar.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <AcUnitIcon className="icon" />
        <h1 className="appName">Tour Guide Sri Lanka</h1>
      </div>
      <div className="linkNames">
        <a className="link" href="#">
          Home
        </a>
        <a className="link" href="#">
          About us
        </a>
        <a className="link" href="#">
          Contact us
        </a>
        <a className="link" href="#">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
