import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-ontainerc">
        <div className="cta-header">
          <h2 className="cta-heading">Ready to Transform Your Workflow?</h2>
        </div>
        <div className="cta-pera-01">
          <p className="cta-paragraph">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>
        <div className="cta-uttonsb">
          <a href="#" className="cta-button-01 w-button">
            Explore Products
          </a>
          <a href="#" className="cta-button-01 _02 w-button">
            View Pricing
          </a>
        </div>
        <div className="cta-para-02">
          <div className="cta-paragraph-02">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
