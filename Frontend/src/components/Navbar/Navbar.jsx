import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-links"]}>
        <Link to="/">Home</Link>
        <a href="#About">About Us</a>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/schemes-news">Schemes & News</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/blogs">Blog</Link>
        <a href="#Contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
