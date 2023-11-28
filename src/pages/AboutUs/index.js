import React from 'react'
import Hero from './Hero'
import Description from './Description'
import WhyUsSection from '../../components/WhyusSection'
import Experts from '../../components/ExpertsSection'
function AboutUs() {
  return (
    <>
        <Hero/>
        <Description/>
        <WhyUsSection/>
        <Experts/>
    </>
  )
}

export default AboutUs