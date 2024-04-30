import React from 'react'
import './Tailor.css'
import tailor1 from '../../assets/tailor1.png'
import tailor2 from '../../assets/tailor2.png'
import tailor3 from '../../assets/tailor3.png'
import { Link } from 'react-router-dom'


const Tailor = () => {
  return (
    <div className='tailors'>

      <div className="tailor">
        <img src={tailor1} alt="" />
        <img src={tailor2} alt="" />
        <img src={tailor3} alt="" />
        
      </div>

<Link to='/tailor'><button className='btnn'> see more</button> </Link>
    </div>
    
  )
}

export default Tailor
