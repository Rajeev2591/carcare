import React from 'react';
import '../styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Three horizontal lines icon */}
      </div>
      <ul className="nav-links" id="navLinks">
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

export default Navbar;
