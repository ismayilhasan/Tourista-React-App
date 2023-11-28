import React from 'react'
import Hero from '../../components/Hero'
import BrandingSection from '../../components/BrandingSection'
import TrendingSection from '../../components/TrendingSection'
import WhyusSection from '../../components/WhyusSection'
import Experts from '../../components/ExpertsSection'
import FeedbackSection from '../../components/FeedbackSection'
import EuropeSection from '../../components/EuropeSection'
import AsiaSection from '../../components/AsiaSection'
import GoDestinations from '../../components/GoDestinations'
import JoinusSection from '../../components/JoinusSection'

function Home() {
  return (
    <>
      <Hero/>
      <TrendingSection/>
      <BrandingSection/>  
      <WhyusSection/>
      <Experts/>
      <FeedbackSection/>
      <EuropeSection/>
      <AsiaSection/>
        
    </>
  )
}

export default Home