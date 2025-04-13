import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';


const Login = () => {
  const [formData, setFormData] = useState({
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
      // const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/auth/login`, formData);
      localStorage.setItem('token', res.data.token);
      alert("Login Successful!");
      navigate('/'); // Redirect to home
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };


  return (
    <div>
      <h2 className="form-heading">Login</h2>
      <div className="container-center">
        <form onSubmit={handleSubmit} className="shared-form">
          <label htmlFor="email" className="input-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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
            onChange={handleChange}
            required
            className="input-field"
          />
  
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
    }

export default Login;

