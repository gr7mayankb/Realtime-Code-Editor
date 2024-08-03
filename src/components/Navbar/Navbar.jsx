import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">LOGO</div>
      <div className="nav-navitems">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Global Chat</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="nav-btns">
        <button className="nav-btn">Login</button>
        <button className="nav-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
