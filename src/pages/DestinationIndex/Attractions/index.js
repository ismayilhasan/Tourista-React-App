import React from 'react'
import './style.scss'
import { AttractionsData } from '../../../constants/data'
import TripCard from '../../../components/TripCard'
function Attractions() {
  return (
    <section id='AttractionsSection' className='attractions-wrapper'>
        <div className='attractions-heading'>
          <h4>Asia</h4>
        </div>
        <div className="attractions-cards">
            {AttractionsData.map((item) => (
              <TripCard key={item.id} {...item}/>
            ))}
        </div>
    </section>
  )
}

export default Attractions