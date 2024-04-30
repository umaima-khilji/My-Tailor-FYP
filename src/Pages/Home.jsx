import React from 'react'
import Banner from '../UserComponents/Banner/Banner'
import Products from '../UserComponents/Products/Products'
import Title from '../UserComponents/Title/Title'
import About from '../UserComponents/About/About'
import Services from '../UserComponents/Services/Services'
import Measurment from '../UserComponents/Measurment/Measurment'
import Tailor from '../UserComponents/Tailor/Tailor'
import Testimonials from '../UserComponents/Testimonials/Testimonials'



const Home = () => {
  return (
    <div>
      <Banner/>

      <div className='container' >
       
        <Title subTitle = 'Our Products' title='What we Offer'/>
        <Products/>
    <About/>
      <Title subTitle = 'Services We Offer' title='Check Out our services'/>
<Services/>
      <Measurment/>
      <Title subTitle='Tailors' title ='Our Featured Tailors'/>
      <Tailor/>
      <Title subTitle='TESTIMONIALS' title='What Users Says'/>
      <Testimonials/>
      
      </div>
    </div>
  )
}

export default Home
