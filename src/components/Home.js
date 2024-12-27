import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

function Home() {
  return (
    <div>
      <section className="home bg-light text-dark py-5">
        <div className="container text-center">
          <h2>Welcome to Car Care</h2>
          <p>Your one-stop solution for all car care services.</p>
          <Link to="/book-now" className="signup-btn">Sign up for Free Trial</Link>
        </div>
      </section>
      <AboutUs /> {/* Embed the AboutUs component here */}
    </div>
  );
}

export default Home;
