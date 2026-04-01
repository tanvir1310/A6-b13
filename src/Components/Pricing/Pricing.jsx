import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="pricing-heading">Simple, Transparent Pricing</h2>
            <div className="text-block-3">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </div>
          </div>

          <div className="pricing-cards">
            {/* Starter Card */}
            <div className="pricing-card">
              <div className="pricing-card-01">
                <div className="pricing-card-heading">Starter</div>
              </div>
              <div className="pricing-card-02">
                <div className="pricing-card-desc">
                  Perfect for getting started
                </div>
              </div>
              <div className="pricing-card-03">
                <div className="pricing-card-money">$0</div>
                <div className="month">/month</div>
              </div>
              <div className="pricing-card-04 py-8">
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Access to 10 free tools</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Basic templates</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Community support</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">1 project per month</div>
                </div>
              </div>
              <div className="pricing-card-05 mt-20">
                <a href="#" className=" btn pricing-button w-button">
                  Get Started Free
                </a>
              </div>
            </div>

            {/* Pro Card */}
            <div className="pricing-card _02">
              <div className="pricing-card-01">
                <div className="pricing-card-heading _02">Pro</div>
              </div>
              <div className="pricing-card-02">
                <div className="pricing-fature _02">Best for professionals</div>
              </div>
              <div className="pricing-card-03">
                <div className="pricing-card-money _02">$29</div>
                <div className="month _02">/month</div>
              </div>
              <div className="pricing-card-04 ">
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">
                    Access to all premium tools
                  </div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">Unlimited templates</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">Priority support</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">Unlimited projects</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">Cloud sync</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/white-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature _02">Advanced analytics</div>
                </div>
              </div>
              <div className="pricing-card-05 mt-20">
                <a href="#" className=" btn pricing-button _02 w-button">
                  Start Pro Trial
                </a>
              </div>
              <div className="popular">Most Popular</div>
            </div>

            {/* Enterprise Card */}
            <div className="pricing-card">
              <div className="pricing-card-01">
                <div className="pricing-card-heading">Enterprise</div>
              </div>
              <div className="pricing-card-02">
                <div className="pricing-fature">For teams and businesses</div>
              </div>
              <div className="pricing-card-03">
                <div className="pricing-card-money">$99</div>
                <div className="month">/month</div>
              </div>
              <div className="pricing-card-04">
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Everything in Pro</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Team collaboration</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Custom integrations</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Dedicated support</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">SLA guarantee</div>
                </div>
                <div className="pricing-card-06">
                  <img
                    src="/assets/green-Check.png"
                    loading="lazy"
                    alt="check"
                  />
                  <div className="pricing-fature">Custom branding</div>
                </div>
              </div>
              <div className="pricing-card-05 mt-20">
                <a href="#" className="btn pricing-button w-button">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
