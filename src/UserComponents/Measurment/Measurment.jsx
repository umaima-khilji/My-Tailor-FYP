import React from 'react'
import './Measurment.css'
import measurment_section from '../../assets/measurment_section.png'
import { Link } from 'react-router-dom'

const Measurment = () => {
  return (
    <div className='measurment'>
      <div className="mer-left">
        <h3>User Friendly Measuremnts</h3>
        <h2>Your Choice we'll design and stiich just for You</h2>
        <p> is a long established fact that a reader will be distracted by the readable content of 
            a page when looking at its layout. The point of using Lorem Ipsum is that it has 
            a more-or-less normal distribution of letters,
             as opposed to using 'Content here, content here', making it look like readable English.</p>
             
         <Link to = '/measurments'><button className='btnn'>Click here</button></Link>
      </div>

      <div className="mer-right">
      <img src={measurment_section} alt="" className='about-img' />
      </div>

    </div>
  )
}

export default Measurment