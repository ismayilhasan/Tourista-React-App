import React from "react";
import "./style.scss";
import image2 from "../../../assets/images/boxIcon2.png";
import image3 from "../../../assets/images/boxIcon3.png";
import image1 from "../../../assets/images/Frame.svg";
import { GuidanceData } from "../../../constants/data";
function TripPlan() {
  return (
    <section id="TripPlanSection" className="trip-plan-wrapper">
      <div className="trip-plan-heading">
        <h4>Brending new trips</h4>
      </div>
      <div className="trip-plan-cards">
        {GuidanceData.map(({id,title,desc,img}) => (
          <div key={id} className="box">
            <img src={img} alt="" />
            <div className="text">
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TripPlan;
