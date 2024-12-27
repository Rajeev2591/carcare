import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/logo.png'; // Ensure the correct path to your icon image

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content text-center">
          <img src={icon} alt="Icon" className="cta-icon" />
          <Link to="/signup" className="cta-btn">Sign up for Free Trial</Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
