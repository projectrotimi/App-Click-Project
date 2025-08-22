import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">VIZANEST CONCIERGE</a>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="#hero" onClick={toggleMenu}>Home</a>
          <a href="#tours" onClick={toggleMenu}>Tours</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
