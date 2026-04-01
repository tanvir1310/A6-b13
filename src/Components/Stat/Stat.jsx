import React from "react";
import "./Stat.css";

const Stat = () => {
  return (
    <div>
      <section class="stat-section">
        <div class="stat-container">
          <div class="stat-main-container">
            <div class="stat-info">
              <div class="stat-number">50K+</div>
              <div class="stat-text">Active Users</div>
            </div>
            <div class="stat-info _02">
              <div class="stat-number">200+</div>
              <div class="stat-text">Premium Tools</div>
            </div>
            <div class="stat-info">
              <div class="stat-number">4.9</div>
              <div class="stat-text">Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
