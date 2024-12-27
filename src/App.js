import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import BookNowForm from './components/BookNowForm';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/book-now" element={<BookNowForm />} />
        </Routes>
        <Testimonials />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
