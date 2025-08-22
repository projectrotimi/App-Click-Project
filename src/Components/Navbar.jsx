import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">VIZANEST CONCIERGE</a>
        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#tours">Tours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
