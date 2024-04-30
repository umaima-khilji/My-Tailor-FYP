import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/MyTailor_transparent.png'
import cart_icon from '../../assets/cart_icon.png'
import add_icon from '../../assets/add_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
// for sticky nav bar
const[sticky, setSticky] = useState(false);

useEffect(() =>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 200 ? setSticky(true) : setSticky(false);
  })
},[]);

//for moving from one page to next hr line
const [menu,setMenu] = useState("home");

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li onClick={()=>{setMenu("home")}} > <Link to='/'>Home</Link> {menu==="home"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("services")}} > <Link to='/services'>Services</Link> {menu==="services"?<hr/>:<></>} </li>
            {/* <li onClick={()=>{setMenu("aboutUs")}} > <Link to='/aboutUs'>About Us</Link> {menu==="aboutUs"?<hr/>:<></>} </li> */}
            <li onClick={()=>{setMenu("measurments")}} > <Link to='/measurments'>Measurments</Link> {menu==="measurments"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("products")}} > <Link to='/product'>Products</Link> {menu==="products"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("tailor")}} > <Link to='/tailor'>Tailor</Link> {menu==="tailor"?<hr/>:<></>} </li>
        </ul>

        <div className='login-icons'>
         <Link to='/adpost'><img src={add_icon} alt="" className='add-icon' /></Link>
         
        <Link to='/cart'><img src={cart_icon} alt="" className='cart-icon' /></Link>

            <div className='nav-cart-count'>0</div>

            <Link to='/login'><button className='button'>login</button></Link>
  
            
        </div>
    </nav>
  )
}

export default Navbar
