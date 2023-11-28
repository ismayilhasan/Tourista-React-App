import React from "react";
import image1 from "../../assets/images/expertImage1.png";
import image2 from "../../assets/images/expertImage2.png";
import "./style.scss";
function Experts() {
  return (
    <section id="ExpertSection" className="expert-wrapper">
      <div className="expert-heading">
        <h4> Our Local Experts</h4>
      </div>
      <div className="expert-image-section">
        <img src={image1} alt="expertImage" />
        <img src={image2} alt="expertImage" />
        <svg
          className="queto1"
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="114"
          viewBox="0 0 268 114"
          fill="none"
        >
          <path
            d="M0 13.9413V100.059C0 107.756 6.30362 114 14.0751 114H235.697C243.469 114 249.772 107.756 249.772 100.059V31.9057C249.772 30.9198 250.044 29.9638 250.567 29.1174L267.909 0.926101C268.161 0.51782 267.859 0 267.386 0H14.0751C6.30362 0 0 6.24371 0 13.9413Z"
            fill="white"
          />

          <text x="20" y="60" fontFamily="Arial" fontSize="16" fill="black">
            Why trust Gary in Florida to plan your trip to South Africa?
          </text>
        </svg>
      </div>
    </section>
  );
}

export default Experts;
