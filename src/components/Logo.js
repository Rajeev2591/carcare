import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path based on your file structure

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo-container">
            <img src={logo} alt="Car Care Logo" className="logo-image" />
          </div>
          <div className="contact-details text-right">
            <p className="mb-0">Phone: +91 7800044091</p>
            <p className="mb-0">Email: contact@carecar.com</p>
            <p className="mb-0">Address: Bela, Pratapgarh, 230001</p>
            <a href="https://wa.me/917800044091" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-whatsapp"></i> Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
