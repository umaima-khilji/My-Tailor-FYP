import React, { useState } from 'react'
import './Productss.css'
import ProductssData from './ProductssData'
import { AiFillCloseCircle } from "react-icons/ai";


const Productss = () => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const detailPage = (Productss) => {
    setDetail([{...Productss}])
    setClose(true)
  }
  return (
    <>
    {
      close ?
      <div className="detail_container">
      <div className="detail_content">
       <button className='close' onClick={() => setClose(false)}><AiFillCloseCircle/></button> 
        {
          detail.map((x) => {
            return(
              <>
              <div className="detail_info">
                <div className="img-box">
                  <img src={x.img} alt={x.Title} />
                </div>
                <div className="product_detail">
                  <h2>{x.Title}</h2>
                  <h3>${x.price}</h3>
                  <p>{x.Des}</p>
                  <button>Add To Cart</button>
                </div>
              </div>
              </>
            )
          } )
        }
      </div>
    </div> :null
    }
    
    <div className='Container'>
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

     
    </div>
    </> 
  )
}

export default Productss;
