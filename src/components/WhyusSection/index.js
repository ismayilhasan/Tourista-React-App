import React from 'react'
import image2 from '../../assets/images/boxIcon2.png'
import image3 from '../../assets/images/boxIcon3.png'
import image1 from '../../assets/images/Frame.svg'
import './style.scss'
function WhyusSection() {
  return (
    <section id='WhyusSection' className='why-us-wrapper'>
        <div className='why-us-heading'>
          <h4>Why us</h4>
        </div>
        <div className="why-us-cards">
           <div className="box">
                <img src={image1} alt="" />
                <p>More than 149 travel titles currently in print</p>
           </div>
           <div className="box">
                <img src={image2} alt="" />
                <p>More than 149 travel titles currently in print</p>
           </div>
           <div className="box">
                <img src={image3} alt="" />
                <p>More than 149 travel titles currently in print</p>
           </div>
        </div>
    </section>
  )
}

export default WhyusSection