import React from "react";
import './style.scss'
import arrowLeftIcon from '../../../assets/svgS/arrowleft.svg'
import arrowRightIcon from '../../../assets/svgS/arrowright.svg'
import cardImage from '../../../assets/images/BrandingImage1.png'
import { Heading } from "@chakra-ui/react";
function ItalyMap() {
  return (
    <>
      <section id="MapSection" className="bg-map-image">
        <div className="map-section">
          <div className="top-map-section">
            <Heading fontSize={"30px"} color={"#fff"} className="heading-map">Tops things to do</Heading>
            <div className="arrow">
              <div>
                <img src={arrowLeftIcon} alt="arrowLeftIcon" />
              </div>
              <div>
                <img src={arrowRightIcon} alt="arrowRightIcon" />
              </div>
            </div>
          </div>
          <div className="bottommap-section">
            <div>
              <img src={cardImage} alt="" />
              <p>
                Have the drive of your life on the cliff roads of the AAmalfi
                Coast
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItalyMap;
