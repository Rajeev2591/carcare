import React from 'react';

function Process() {
  return (
    <section className="process py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4">Our Working Process</h2>
        <p className="text-center mb-5">Follow these steps to understand how our company works and provides you with the best car detailing services with 100% satisfaction.</p>
        <div className="row text-center">
          {/* Step 1 */}
          <div className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="process-step bg-info text-white p-4 rounded flex-fill">
              <div className="icon mb-3">
                <i className="fas fa-hand-pointer fa-3x"></i>
              </div>
              <h5 className="step-title">Select your Subscription type</h5>
              <p className="step-description">According to your car category, select your subscription.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="process-step bg-success text-white p-4 rounded flex-fill">
              <div className="icon mb-3">
                <i className="fas fa-calendar-alt fa-3x"></i>
              </div>
              <h5 className="step-title">Get 1 Month Free Trial</h5>
              <p className="step-description">We provide the service free of cost for one month to win your trust.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="process-step bg-warning text-white p-4 rounded flex-fill">
              <div className="icon mb-3">
                <i className="fas fa-car-wash fa-3x"></i>
              </div>
              <h5 className="step-title">Use of Filtered Water</h5>
              <p className="step-description">We install a filter on your society's water tap to filter out heavy metals like lead and chlorine.</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="col-md-3 mb-4 d-flex align-items-stretch">
            <div className="process-step bg-primary text-white p-4 rounded flex-fill">
              <div className="icon mb-3">
                <i className="fas fa-gift fa-3x"></i>
              </div>
              <h5 className="step-title">Complimentary Gifts</h5>
              <p className="step-description">Get complimentary gifts like car bins, tissue boxes, fragrance cards, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
