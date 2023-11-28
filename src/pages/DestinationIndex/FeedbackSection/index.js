import React from 'react'
import travvellerImage from '../../../assets/images/travellerImage.png'
import backgroundImageSrc from '../../../assets/images/destBgImage.png'
import './style.scss'
function FeedbackSection() {
   
  return (
    <section id="FeedbackDestinationSection" className="feedback-wrapper">
      <div  className="feedback-content">
        <p>
          Tiago put together an epic itinerary for me and my friends. He showed
          us some hidden hiking trails and amazing local food spots. He even met
          us for a coffee to make sure we had everything we needed.
        </p>
      
      </div>

      <div className="crafted-by-section">
        <div className="left">
          <img src={travvellerImage} alt="" />
        </div>
        <div className="rigth">
          <p className="crafted-by">Crafted By</p>
          <div className="name-and-profession">
            <h5 className="name">Tiago</h5>
            <span className="dvider">|</span>
            <span>Local expert in Portugal</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection