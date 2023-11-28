import React from "react";
import travellerImage from "../../assets/images/travellerImage.png";
import "./style.scss";
function FeedbackSection() {
  return (
    <section id="FeedbackSection" className="feedback-wrapper">
      <div className="feedback-content">
        <p>
          Tiago put together an epic itinerary for me and my friends. He showed
          us some hidden hiking trails and amazing local food spots. He even met
          us for a coffee to make sure we had everything we needed.
        </p>
        <div className="signuture-feedback">
          <p className="thanks-tiago">Thanks Tiago!”</p>
          <p className="location">
            Charlie, rappelling down a 370-foot waterfa
          </p>
          <p className="azores">The Azores</p>
        </div>
      </div>

      <div className="crafted-by-section">
        <div className="left">
          <img src={travellerImage} alt="" />
        </div>
        <div className="rigth">
          <p className="crafted-by">Crafted By</p>
          <div className="name-and-profession">
            <h5 className="name">Tiago</h5>
            <span className="dvider">|</span>
            <span>Local expert in Portugal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
