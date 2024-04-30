import React, { useState } from 'react'
import './OurTailors.css'
import OurTailorsData from './OurTailorsData'

const OurTailors = () => {
  const [detail, setDetail] = useState([]);
  const detailPage = (OurTailors) => {
    setDetail([{...OurTailors}])
   
  }
  return (
    <>
      <div className="Tailor_container">
      
      {
        OurTailorsData.map((curElm) => 
        {
          return(
            <>
            <div className="tailor_box">
              <div className="tailor_content">
                <div className="img-box">
                  <img src={curElm.img} alt={curElm.Title} ></img>
              
                </div>
                <div className="tailor_deatil">
                  <div className="tailor_info">
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.Des}</p>
                   
                    
                  </div>
                  <button onClick={()=> detailPage (curElm)}>View</button>
                </div>
              </div>
            </div>
            </>
          )
        })
      }

     
    </div>
    
    
    
    {/* <div className='Container'>
   

      {
        ProductssData.map((curElm) => 
        {
          return(
            <>
            <div className="box">
              <div className="content">
                <div className="img-box">
                  <img src={curElm.img} alt={curElm.Title} ></img>
              
                </div>
                <div className="deatil">
                  <div className="info">
                    <h3>{curElm.Title}</h3>
                   
                    <p>${curElm.price}</p>
                  </div>
                  <button onClick={()=> detailPage (curElm)}>View</button>
                </div>
              </div>
            </div>
            </>
          )
        })
      }

     
    </div> */}
    </> 
  )
}

export default OurTailors;
