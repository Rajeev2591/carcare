import React from 'react';
import { Carousel } from 'react-bootstrap';

function Testimonials() {
  return (
    <section className="testimonials py-5 text-white" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x800)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-success">Testimonial</h2>
        <h3 className="text-center mb-5 text-white">Our Clients Say</h3>
        <Carousel indicators={false} controls={false} interval={3000}>
          <Carousel.Item>
            <div className="card bg-dark text-white mx-auto text-center" style={{ maxWidth: '800px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star-half-alt text-warning"></i>
                </div>
                <h5 className="card-title text-success">Rajeev Chaurasia</h5>
                <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
                <p className="card-text">I don't have to run after my society's Security Guard for cleaning my Cars anymore. Wash My Car's Daily Doorstep Wash is a Great Initiative.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card bg-dark text-white mx-auto text-center" style={{ maxWidth: '800px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star-half-alt text-warning"></i>
                </div>
                <h5 className="card-title text-success">Jhon Doe</h5>
                <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
                <p className="card-text">The team was professional and thorough. Very satisfied with the results.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card bg-dark text-white mx-auto text-center" style={{ maxWidth: '800px' }}>
              <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star-half-alt text-warning"></i>
                </div>
                <h5 className="card-title text-success">Suraj Singh</h5>
                <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
                <p className="card-text">Great value for money. My car looks brand new after their service!</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="row text-center mt-5">
          <div className="col-md-4 mb-4">
            <div className="stat-card p-3 bg-success rounded">
              <h4 className="stat-number">386+</h4>
              <p className="stat-text">Cars Washed</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="stat-card p-3 bg-success rounded">
              <h4 className="stat-number">97%</h4>
              <p className="stat-text">Trusted Clients</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="stat-card p-3 bg-success rounded">
              <h4 className="stat-number">75+</h4>
              <p className="stat-text">Trained Staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
