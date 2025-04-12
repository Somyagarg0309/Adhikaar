import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-links"]}>
        <a href="/">Home</a>
        <a href="#AboutUs">About Us</a>
        <a href="#f">Chatbot</a>
        <a href="#f">Schemes & News</a>
        <a href="#f">Scanner</a>
        <a href="#f">Blog</a>
        <a href="#Contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;