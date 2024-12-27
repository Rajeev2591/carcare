import React from 'react';
import { Link } from 'react-router-dom';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Ensure the correct path to your WhatsApp icon

function Contact() {
  return (
    <section className="contact py-5 text-dark">
      <div className="container text-center">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-exclamation-circle fa-2x text-danger mr-2"></i>
              <h5 className="text-danger mb-0">Need our service? Ask anything by calling us</h5>
            </div>
            <Link to="/register" className="btn btn-success mt-3">Book Now</Link>
          </div>
        </div>
        <h2 className="text-success">Get in Touch</h2>
        <p className="mt-3">If you have any questions or need further information, feel free to contact us through any of the methods below.</p>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-phone fa-3x text-info mb-3"></i>
              <p className="h5">+91 7800044091</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-envelope fa-3x text-warning mb-3"></i>
              <p className="h5">contact@carecar.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <a href="https://wa.me/1234567890" className="nav-link">
                <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
              <p className="h5">Bela, Pratapgarh, 230001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
