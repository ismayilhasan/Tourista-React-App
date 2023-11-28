import React from 'react'
import './style.scss'
import { AsiaData } from '../../constants/data'
import TripCard from '../TripCard'
function AsiaSection() {
  return (
    <section id='AsiaSection' className='asia-wrapper'>
        <div className='asia-heading'>
          <h4>Asia</h4>
        </div>
        <div className="asia-cards">
            {AsiaData.map((item) => (
              <TripCard key={item.id} {...item}/>
            ))}
        </div>
    </section>
  )
}

export default AsiaSection