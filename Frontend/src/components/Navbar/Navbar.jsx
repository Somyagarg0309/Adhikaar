import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-links"]}>
        <Link to="/">Home</Link>
        <Link to="/" state={{ scrollTo: "about" }}>About Us</Link>
        <Link to="/chatbot">Personal Assistant</Link>
        <Link to="/schemes-news">Schemes & News</Link>
        <Link to="/scanner">Document Scanner</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/" state={{ scrollTo: "contact" }}>Contact Us</Link>

      </div>
    </nav>
  );
};

export default Navbar;
