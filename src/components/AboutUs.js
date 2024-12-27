import React from 'react';
import carWashImage from '../assets/car-wash.jpg'; // Ensure the correct path to your image
import carRepairImage from '../assets/car-repair.jpg'; // Ensure the correct path to your image
import carServiceImage from '../assets/car-service.jpg'; // Ensure the correct path to your image

function AboutUs() {
  return (
    <section className="about-us py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4">New Car Wash & Repair Service in your Area</h2>
        <p>
          Under the supervision of experts as well as the customer himself, the team of Wash My Cars works intensively to provide the best-of-its-kind car cleaning services. Interior to the exterior, we blend technology, skills, and innovation in our service. High-tech equipment and quality material are used to clean every micro and big part of the car.
        </p>
        <div className="card-container">
          <div className="card">
            <img src={carWashImage} alt="Car Wash" />
            <div className="card-content">
              <h3>Daily Car Wash Right at Your Doorstep</h3>
              <p>
                Around 95% cars are washed with hard unfiltered boring water that contains heavy metals like lead and chlorine which damages the color of the car in long term. Now we don’t and won't ever support washing cars with drinking water but we have made a good use of the available technology to filter the hard water and increase the life of the Paint job.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={carRepairImage} alt="Car Repair" />
            <div className="card-content">
              <h3>High-Quality Service</h3>
              <p>
                Expert car repair services to keep your car in top condition. We prioritize quality and customer satisfaction in everything we do.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={carServiceImage} alt="Car Service" />
            <div className="card-content">
              <h3>Affordable Product Pricing</h3>
              <p>
                We are launching a complete Car Care Package for your car starting as low as Rs 390/month. Yes, you heard that right. Cheaper than what you pay your watchman for washing your car daily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
