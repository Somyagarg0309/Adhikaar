

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload(); // reload to reflect change
  };


  return (
    <header className="header">
      <div className="left-title">ADHIKAAR</div>
      <div className="right-section">
        <img src="/assets/images/logo.png" alt="Adhikaar Icon" className="icon-img" />
        {isLoggedIn ? (
          <button onClick={handleLogout} className="auth-btn">Logout</button>
        ) : (
          <>
            <Link to="/login" className="auth-btn">Login</Link>
            <Link to="/signup" className="auth-btn">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};


export default Header;
