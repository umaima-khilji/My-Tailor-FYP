import React from 'react'
import './ServicesAbout.css'
import serviceAbout from '../../assets/serviceAbout.png'

const ServicesAbout = () => {
  return (
    <div className='ServiceAbout'>

        <div className='Sabout-left'>
          <p>Our Benifits</p>
          <h3>Why You Should Choose Us?</h3>
          <p>There are many variations of passages of LoremIpsum available, but the majority have sufferedalteration in some form.</p>
          <ul>
            <li>Urgent wedding dresses solutions</li>
            <li>Top quality services with reasonable price</li>
            <li>Reliable & experienced tailors</li>
          </ul>

        </div>

        <div className='Sabout-right'>
          <img src={serviceAbout} alt="" className='service-img' />
        </div>
      
      

{/* <button className='btnn'> see more</button> */}
    </div>
    
  )
}

export default ServicesAbout
