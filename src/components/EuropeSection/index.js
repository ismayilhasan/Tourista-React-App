import React from 'react'
import './style.scss'
import { EuropeData } from '../../constants/data'
import TripCard from '../TripCard'
function EuropeSection() {
  return (
    <section id='EuropeSection' className='europe-wrapper'>
        <div className='europe-heading'>
          <h4>Europe</h4>
        </div>
        <div className="europe-cards">
            {EuropeData.map((item) => (
              <TripCard key={item.id}{...item}/>
            ))}
        </div>
    </section>
  )
}

export default EuropeSection