import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const contactRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      navigate(location.pathname, { replace: true, state: {} }); // Clear state after scroll
    }
  }, [location, navigate]);

  return (
    <footer className="footer-container" id="Contact" ref={contactRef}>
      <div className="footer-top">
        <p>Get connected with us on social networks:</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-google" />
          <i className="fab fa-instagram" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-github" />
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-section">
          <h3>ADHIKAAR</h3>
          <p>
            ADHIKAAR is a global platform dedicated to uplifting and supporting the LGBTQ+ community.
          </p>
        </div>

        <div className="footer-section">
          <h4>FEATURES</h4>
          <ul>
            <li>Personal Assistant</li>
            <li>Schemes&News</li>
            <li>Document Scanner</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href='https://transgender.dosje.gov.in/' target='_blank'>
            National Portal </a></li>
            <li><a href='https://tweetindia.org/' target='_blank'>
            Tweet Foundation </a></li>
            <li><a href='https://sahodari.org/' target='_blank'>
            Sahodari Foundation </a></li>
            <li><a href='https://gate.ngo/' target='_blank'>
            Global Action </a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li><i className="fas fa-home" /> <a href='https://github.com/Somyagarg0309' target='_blank'>
            Somya Garg </a></li>
            <li><i className="fas fa-envelope" /> <a href='https://github.com/sanyakapoor27' target='_blank'>
            Sanya Kapoor</a></li>
            <li><i className="fas fa-phone" /><a href='https://github.com/vidhiwalia' target='_blank'>
            Vidhi Walia </a></li>
            <li><i className="fas fa-print" /> <a href='https://github.com/vanshika241' target='_blank'>
            Vanshika Chaudhary </a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Copyright
      </div>
    </footer>
  );
};

export default Footer;
