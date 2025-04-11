import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-links']}>
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/schemes-news">Schemes & News</Link>
      </div>
    </nav>
  );
};

export default Navbar;
