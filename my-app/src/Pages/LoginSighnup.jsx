import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission (e.g., call an API or redirect)
      console.log('Form submitted successfully', formData);
    }
  };

  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-signup-fields">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your Name'
            />
            {errors.name && <p className="error">{errors.name}</p>}
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email Address'
            />
            {errors.email && <p className="error">{errors.email}</p>}
            
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Password'
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Continue</button>

          <p className="login-signup-login">
            Already have an account? <span>Sign In</span>
          </p>

          <div className="login-signup-agree">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
