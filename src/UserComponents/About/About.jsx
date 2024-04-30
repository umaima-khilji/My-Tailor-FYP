import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
// import play_icon from '../../assets/play_icon.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        {/* <img src={play_icon} alt="" className='play-icon' /> */}
      </div>
      <div className="about-right">
        <h3>Post Your Ad</h3>
        <h2>Your Choice we'll design and stiich just for You</h2>
        <p> is a long established fact that a reader will be distracted by the readable content of 
            a page when looking at its layout. The point of using Lorem Ipsum is that it has 
            a more-or-less normal distribution of letters,
             as opposed to using 'Content here, content here', making it look like readable English.</p>
             
        <Link to = '/adpost' > <button className='btnn'>Click here</button></Link>
      </div>
    </div>
  )
}

export default About
