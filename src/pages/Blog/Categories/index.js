import React from 'react'
import './style.scss'
function Categories() {
  return (
    <section id='Categories'>
        <div className='category-item active'>All Articles</div>
        <div className='category-item'>Food & Drink</div>
        <div className='category-item'>Inspartion</div>
        <div className='category-item'>Local Guides</div>
        <div className='category-item'>See & Do</div>
        <div className='category-item'>Travel Tips</div>
        <div className='category-item'>Where to stay</div>
    </section>
  )
}

export default Categories