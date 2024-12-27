import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Ensure the correct path to your logo image
import whatsappIcon from '../assets/whatsapp-icon.png'; // Ensure the correct path to your WhatsApp icon

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logoImage} alt="Logo" className="logo" />
          Car Care
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/process">Process</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            
            <li className="nav-item">
              <a href="https://wa.me/1234567890" className="nav-link">
                <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
