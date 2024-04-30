import React from 'react'
import './Banner.css'
import arrow from '../../assets/arrow.png'

const Banner = () => {
  return (
    <div className='Banner container'>
      <div className="Banner-text">
        <h1>Discover And Find Your Own Tailor</h1>
        <p>EXPLORE OUR CLUTURED COLLECTION OF STYLISH CLOTHING AND ASSESCERIES TOLLRETED TO YOUS UNIQUE TASTE</p>
        <div className='Banner-btn'>
        <div>Explore More</div>
        <img src={arrow} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Banner
