import React from 'react'
import './servicess.css'
import Group1 from '../../assets/Group1.png'
import Group2 from '../../assets/Group2.png'
import Group3 from '../../assets/Group3.png'
import Group4 from '../../assets/Group4.png'
import Group5 from '../../assets/Group5.png'
import Group6 from '../../assets/Group6.png'


const servicess = () => {
  return (
    <div className='Pservicess'>

      <div className="Pservices">
        <img src={Group1} alt="" />
        <img src={Group2} alt="" />
        <img src={Group3} alt="" />
        
      </div>
     
      <div className="Pservices">
        <img src={Group4} alt="" />
        <img src={Group5} alt="" />
        <img src={Group6} alt="" />
        
      </div>

      

{/* <button className='btnn'> see more</button> */}
    </div>
    
  )
}

export default servicess
