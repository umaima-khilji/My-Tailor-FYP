import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Services.css'
import custom1 from '../../assets/custom1.png'
import measurment1 from '../../assets/measurment1.png'
import repair1 from '../../assets/repair1.png'
import AD1 from '../../assets/AD1.png'
import cloths1 from '../../assets/cloths1.png'
import letout1 from '../../assets/letout1.png'
import { Link } from 'react-router-dom'

const Services = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='service'>
        
        <Carousel responsive={responsive}>
        <div className='card'>
            < img className='product--image' src={custom1} alt="product image" />
            <h2>Custom Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>

        <div className='card'>
            < img className='product--image' src={measurment1} alt="product image" />
            <h2>Body Measurment</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>

        <div className='card'>
            < img className='product--image' src={repair1} alt="product image" />
            <h2>Repair</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>

        <div className='card'>
            < img className='product--image' src={AD1} alt="product image" />
            <h2>AD Post</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>

        <div className='card'>
            < img className='product--image' src={cloths1} alt="product image" />
            <h2>Stylish Cloths</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>

        <div className='card'>
            < img className='product--image' src={letout1} alt="product image" />
            <h2>Let Out Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem amet laboriosam quae, praesentium, sed et nostrum vitae ist
                tempora possimus. Vitae assumenda voluptatum excepturi iure officiis ab.</p>
        </div>
</Carousel>

<Link to= '/services'><button className='buton'>See More</button> </Link>
    </div>
     
  )
}

export default Services
