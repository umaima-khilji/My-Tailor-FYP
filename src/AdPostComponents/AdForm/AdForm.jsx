// DetailedInformationForm.js

import React, { useState } from 'react';
import './AdForm.css'; // Import CSS file for styling

const AdForm = () => {
  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    contact: '',
    selectedItems: [],
    uploadedPhotos: [],
    selectedSize: '',
    description: '',
    offerPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedItems = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedItems.push(options[i].value);
      }
    }
    setFormData({ ...formData, [name]: selectedItems });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, uploadedPhotos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data on submission (replace with desired action)
  };

  return (
    <div className="form-container">
      <h2>Detailed Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectedItems">Select Items:</label>
          <select
            id="selectedItems"
            name="selectedItems"
            // multiple
            value={formData.selectedItems}
            onChange={handleSelectChange}
            required
          >
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="photos">Upload Photos:</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />
        </div>


        <div className="form-group">
          <label htmlFor="gender">selecte Size:</label>
          <select
            id="selectedSize"
            name="selectedSize"
            value={formData.selectedSize}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            <option value="size1">Size 1</option>
            <option value="size2">Size 2</option>
            <option value="size2">Size 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="offerPrice">Offer Your Price:</label>
          <input
            type="text"
            id="offerPrice"
            name="offerPrice"
            value={formData.offerPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" className="edit-button">Edit</button>
          <button type="button" className="myad-button"> My Ad's</button> 
          <button type="submit" className="submit-button">Submit Ad</button>
        </div>
      </form>
    </div>
  );
};

export default AdForm;
