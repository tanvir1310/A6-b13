import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <section className="banner-hero-section">
        <div className="container">
          <div className="banner-main-container">
            <div className="banner-left">
              {/* Tag Section */}
              <div className="banner-left-tag">
                <div className="banner-tag">
                  <img
                    src="/assets/Hero-image/Hero-dot.png"
                    loading="lazy"
                    alt="dot icon"
                    className="banner-dot"
                  />
                  <div className="banner-tag-text">
                    New: AI-Powered Tools Available
                  </div>
                </div>
              </div>

              {/* Heading Section */}
              <div className="banner-left-headding">
                <h1 className="banner-hero-heading">
                  Supercharge Your Digital Workflow
                </h1>
              </div>

              {/* Paragraph Section */}
              <div className="banner-left-paragraph">
                <p className="hero-paragraph">
                  Access premium AI tools, design assets, templates, and
                  productivity software—all in one place. Start creating faster
                  today.
                </p>
              </div>

              {/* Buttons Section */}
              <div className="banner-left-buttons">
                <div className="banner-btn-01">
                  <a href="#" className="hero-btn-explore w-button">
                    Explore Products
                  </a>
                </div>
                <div className="banner-btn-02">
                  <a href="#" className="watch-btn w-button">
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="banner-right">
              <img
                src="/assets/Hero-image/Hero-image.png"
                loading="lazy"
                alt="Banner Hero"
                className="banner-right-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
