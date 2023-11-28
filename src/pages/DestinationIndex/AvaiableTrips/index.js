import React from "react";
import './style.scss'
import { TopDestinationData } from "../../../constants/data";
import TripCard from "../../../components/TripCard";
function AviableTrips() {
  return (
    <section id="AviableTripsSection" className="aviable-trip-wrapper">
      <div className="aviable-trip-heading">
        <h4>Aviable Trips</h4>
      </div>
      <div className="aviable-trip-cards">
        {TopDestinationData.map((item) => (
          <TripCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AviableTrips;
