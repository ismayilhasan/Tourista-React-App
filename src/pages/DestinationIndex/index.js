import React from 'react'
import IndexHero from './Hero'
import Hero from './Hero'
import AviableTrips from './AvaiableTrips'
import ItalyMap from './ItalyMap'
import Attractions from './Attractions'
import FeedbackSection from './FeedbackSection'
import TripPlan from './TripPlan'

function DestinationIndex() {
  return (
    <>
    <Hero/>
    <AviableTrips/>
    <ItalyMap/>
    <Attractions/>
    <FeedbackSection/>
    <TripPlan/> 
    </>
  )
}

export default DestinationIndex