import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from './UserComponents/Navbar/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
// import AboutUs from './Pages/AboutUs'
import Products from './Pages/Products'
import Tailor from './Pages/Tailor'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Measurments from './Pages/Measurments'
import AdPost from './Pages/AdPost'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
{/* set routes */}
       <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/services' element={<Services/>}/>
        {/* <Route path = '/aboutUs' element={<AboutUs/>}/> */}
        <Route path = '/measurments' element={<Measurments/>}/>
        <Route path = '/products' element={<Products/>}/>
        <Route path = '/tailor' element={<Tailor/>}/>
        <Route path = ':productId' element={<Products/>}/>
        
      <Route path = '/cart' element={<Cart/>}/>
      <Route path = '/login' element={<LoginSignup/>}/>
      <Route path = '/adpost' element={<AdPost/>}/>
      

       </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
