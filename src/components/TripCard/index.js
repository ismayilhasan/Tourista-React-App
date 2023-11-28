import React from 'react'
import './style.scss'
       
function TripCard({imageUrl,country,desc,day,price}) {
  return (
    <div className='trip-card'>
        <img className='trip-image' src={imageUrl} alt="cardImage" />
        <div className="text-area">
            <span className='name-of-trip'>{country} Trip</span>
            <h5 className='description'>{desc}</h5>
            <div className='day-and-price'>
                <p className='day'>{day} days</p>
                <p className='price'><span className='from'>from </span>${price}</p>
            </div> 
        </div>
    </div>
  )
}

export default TripCard