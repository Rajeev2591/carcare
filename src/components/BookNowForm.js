import React, { useState } from 'react';

function BookNowForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rajeev2591@gmail.com?subject=Book Now Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APreferred Date: ${formData.date}%0AService: ${formData.service}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="book-now-form-container">
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            <option value="Basic Wash">Basic Wash</option>
            <option value="Full Detailing">Full Detailing</option>
            <option value="Exterior Polish">Exterior Polish</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default BookNowForm;
