import React from 'react'
import './Products.css'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import dressIcon4 from '../../assets/dressIcon4.png'
const Services = () => {
  return (
    <div className='products'>

      <div className="product">
        <img src={p1} alt="" />
        <div className="caption">
          <img src={dressIcon4} alt="" />
          <p>Simple Shirt & Plazo</p>
          
        </div>
      </div>

      <div className="product">
        <img src={p2} alt="" />
        <div className="caption">
          <img src={dressIcon4} alt="" />
          <p>Simple Shirt & Plazo</p>
        </div>
      </div>
      
      <div className="product">
        <img src={p3} alt="" />
        <div className="caption">
          <img src={dressIcon4} alt="" />
          <p>Simple Shirt & Plazo</p>
        </div>
      </div>
    </div>
  )
}

export default Services
