import React from "react";
import "./style.scss";
import { Text } from "@chakra-ui/react";
import TripCard from '../../components/TripCard'
import travellerImage from "../../assets/images/travellerImage.png"
import {
  AfricaCountriesData,
  AsiaCountiresData,
  CAmerica,
  EuropaCountriesData,
  SAmerica,
  TopDestinationData,
} from "../../constants/data";
function Destination() {
  return (
    <>
      <section id="DestinationHero" className="destination-container">
        <div className="text-area">
          <h1 className="title">Explore places on Tourista</h1>
          <div className="sub-title">Destinations</div>
        </div>
      </section>

      <section id="CountriesList">
        <div className="europa-column">
          <h4 className="heading">Europa</h4>
          <div className="list">
            {EuropaCountriesData.map(({ Name: country, Id }) => (
              <Text fontWeight={500} lineHeight={"24px"} key={Id}>
                {country}
              </Text>
            ))}
          </div>
        </div>
        <div className="asia-column">
          <h4 className="heading">Asia</h4>
          <div className="list">
            {AsiaCountiresData.map(({ Name: country, Id }) => (
              <Text fontWeight={500} lineHeight={"24px"} key={Id}>
                {country}
              </Text>
            ))}
          </div>
        </div>
        <div className="africa-column">
          <h4 className="heading">Africa</h4>
          <div className="list">
            {AfricaCountriesData.map(({ Name: country, Id }) => (
              <Text fontWeight={500} lineHeight={"24px"} key={Id}>
                {country}
              </Text>
            ))}
          </div>
        </div>
        <div className="c-america-column">
          <h4 className="heading">C/America</h4>
          <div className="list">
            {CAmerica.map(({ Name: country, Id }) => (
              <Text fontWeight={500} lineHeight={"24px"} key={Id}>
                {country}
              </Text>
            ))}
          </div>
        </div>
        <div className="s-america-column">
          <h4 className="heading">S/America</h4>
          <div className="list">
            {SAmerica.map(({ Name: country, Id }) => (
              <Text fontWeight={500} lineHeight={"24px"} key={Id}>
                {country}
              </Text>
            ))}
          </div>
        </div>
      </section>

      <section id="TopDestinationSection" className="top-destination-wrapper">
        <div className="top-destination-heading">
          <h4>Top Destinations</h4>
        </div>
        <div className="top-destination-cards">
          {TopDestinationData.map((item) => (
            <TripCard key={item.id} {...item} />
          ))}
        </div>
      </section>


      <section id="DestinationFeedbackSection" className="destination-feedback-wrapper">
      <div className="destination-feedback-content">
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
    </>
  );
}

export default Destination;
