import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = () => {
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <section className="about-section" id="About" ref={aboutRef}>
        <div className="about-image">
          <img 
            src="/assets/images/finalAbout.jpg" 
            alt="Diverse people illustration" 
            style={{ width: '100%', objectFit: 'cover', borderRadius: '12px' }} 
          />
        </div>
        <div className="about-content">
          <div className="tag">Who We Are</div>
          <h2>ADHIKAAR</h2>
          <p>
            <span className="highlight">ADHIKAAR</span> is a global platform dedicated to uplifting and supporting the LGBTQ+ community.
            We provide essential tools including:
          </p>
          <ul className="feature-list">
            <li><strong>Chatbot:</strong> AI-based legal guidance & emotional support.</li>
            <li><strong>Blog:</strong> Share and explore lived experiences and community updates.</li>
            <li><strong>Scanner:</strong> Text image analysis in multiple languages for inclusivity checks.</li>
            <li><strong>Schemes & News:</strong> Stay informed about government schemes and LGBTQ+ news.</li>
          </ul>
          <p>
            With the help of global NGOs and communities, we aim to ensure safe spaces, real-time support, and widespread legal empowerment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
