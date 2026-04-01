import React from "react";
import "./Step.css";

const Step = () => {
  return (
    <section className="step-section">
      <div className="step-container">
        <div className="step-main-container">
          <div className="step-header">
            <h2 className="step-section-heading">Get Started in 3 Steps</h2>
            <p className="step-section-paragraph">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="step-main">
            {/* Step 01 */}
            <div className="step-card">
              <div className="step-image">
                <img src="/assets/Step/1.png" loading="lazy" alt="Step 1" />
              </div>
              <div className="step-card-heading">
                <div className="step-card-heading-main">Create Account</div>
              </div>
              <div className="step-card-text">
                <div className="step-card-paragraph-main">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </div>
              </div>
              <div className="number">01</div>
            </div>

            {/* Step 02 */}
            <div className="step-card">
              <div className="step-image">
                <img src="/assets/Step/2.png" loading="lazy" alt="Step 2" />
              </div>
              <div className="step-card-heading">
                <div className="step-card-heading-main">Choose Products</div>
              </div>
              <div className="step-card-text">
                <div className="step-card-paragraph-main">
                  Browse our catalog and select the tools that fit your needs.
                </div>
              </div>
              <div className="number">02</div>
            </div>

            {/* Step 03 */}
            <div className="step-card">
              <div className="step-image">
                <img src="/assets/Step/3.png" loading="lazy" alt="Step 3" />
              </div>
              <div className="step-card-heading">
                <div className="step-card-heading-main">Start Creating</div>
              </div>
              <div className="step-card-text">
                <div className="step-card-paragraph-main">
                  Download and start using your premium tools immediately.
                </div>
              </div>
              <div className="number">03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
