import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Chatbot</a>
        <a href="#">Schemes</a>
        <a href="#">Scanner</a>
        <a href="#">Story Telling</a>
      </div>
    </nav>
  );
};

export default Navbar;
