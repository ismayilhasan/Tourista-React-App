import React from 'react'
import './style.scss'
import { BrendingData } from '../../constants/data'
import TripCard from '../TripCard'
function BrandingSection() {
  return (
    <section id='BrendingSection' className='brending-wrapper'>
        <div className='brending-heading'>
          <h4>Brending new trips</h4>
        </div>
        <div className="brending-cards">
            {BrendingData.map((item) => (
              <TripCard key={item.id} {...item}/>
            ))}
        </div>
    </section>
  )
}

export default BrandingSection