import React from 'react'
import './Sizeform.css'
import size2 from '../../assets/size2.png'
import { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import { Button } from 'react-bootstrap'

const Sizeform = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

   

  return (
  <div className='Sizeform'>
    {/* <h3>Size Chart</h3> */}

    <div className="size-left">
        <img src={size2} alt="" />
    </div>

    {/* form */}
    <div className="size-right">
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Full Length:
        <input
          type="text"
          name="fulllength"
          value={formData.fulllength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Arm/T Length:
        <input
          type="text"
          name="tlength"
          value={formData.tlength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Leg/B Length:
        <input
          type="text"
          name="blength"
          value={formData.blength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Shoulder Length:
        <input
          type="text"
          name="shoulderlength"
          value={formData.shoulderlength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Chest Length:
        <input
          type="text"
          name="chestlength"
          value={formData.chestlength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Waist Length:
        <input
          type="text"
          name="waistlength"
          value={formData.waistlength}
          onChange={handleChange}
        />
      </label> 
      <br />
      <label>
        Hip Length:
        <input
          type="text"
          name="hiplength"
          value={formData.hiplength}
          onChange={handleChange}
        />
      </label> 
      <br />
      
      

      {/* <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br /> */}
      {/* <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br /> */}
      <button type="submit">Submit</button>
    </form>
    </div>
    
  </div>
  )
}

export default Sizeform
