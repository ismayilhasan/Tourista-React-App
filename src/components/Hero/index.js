import React from 'react'
import './style.scss'
function Hero() {
  return (
    <section  id='Hero' className='hero-container'>
        <div className="text-area">
            <h1 className="title">We create trips you love</h1>
            <div className="sub-title">Trips you couldn't plan, even if you wanted to.</div>
        </div>
        <div className="search-area">
            <input placeholder='Where do you want go?' className='search-input' type="text" />
            <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </section>
  )
}

export default Hero