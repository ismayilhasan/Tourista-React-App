import React from 'react'
import './style.scss'
import { TrendingData } from '../../constants/data'
import TripCard from '../TripCard'
function TrendingSection() {
  return (
    <section id='TrendingSection' className='trending-wrapper'>
        <div className='trending-heading'>
          <h4>Trending now</h4>
        </div>
        <div className="trending-cards">
            {TrendingData.map((item) => (
              <TripCard key={item.id}  {...item}/>
            ))}
        </div>
    </section>
  )
}

export default TrendingSection