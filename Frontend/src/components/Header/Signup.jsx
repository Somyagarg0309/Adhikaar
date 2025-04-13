import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/auth/signup`,
        formData
      );
      localStorage.setItem('token', res.data.token);
      alert("Signup Successful!");
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };
  return (
    <div>
      <h2 className="form-heading">Sign Up</h2>
      <div className="container-center">
        <form onSubmit={handleSubmit} className="shared-form">
          <label htmlFor="username" className="input-label">Username</label>
          <input
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
  
          <label htmlFor="email" className="input-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
  
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
  
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
  
  
};

export default Signup;
