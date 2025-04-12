import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" id='Contact'>
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
          <h4>PRODUCTS</h4>
          <ul>
            <li>MDBootstrap</li>
            <li>MDWordPress</li>
            <li>BrandFlow</li>
            <li>Bootstrap Angular</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>Your Account</li>
            <li>Become an Affiliate</li>
            <li>Shipping Rates</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li><i className="fas fa-home" /> New York, NY 10012, US</li>
            <li><i className="fas fa-envelope" /> info@example.com</li>
            <li><i className="fas fa-phone" /> + 01 234 567 88</li>
            <li><i className="fas fa-print" /> + 01 234 567 89</li>
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
