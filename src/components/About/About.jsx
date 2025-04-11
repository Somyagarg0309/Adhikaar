import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="about-image">
          <img src="src\assets\images\aboutImg.jpg" alt="Diverse people illustration" />
        </div>
        <div className="about-content">
          <div className="tag">Who We Are</div>
          <h2>About Us</h2>
          <p>
            <span className="highlight">
              LRAH (LGBTQ+ Rights & Advocacy Hub) is a global digital platform dedicated to empowering the LGBTQ+ community
            </span>{' '}
            by providing access to legal awareness tools, anonymous reporting, inclusive education, and community support. 
            Our mission is to promote equality, amplify voices, and offer a safe space for advocacy, learning, and solidarity.
            We partner with NGOs and allies worldwide to ensure real-time assistance, secure resources, and lasting impact.
          </p>
          <button className="btn">Know More</button>
        </div>
      </section>
    </div>
  );
};

export default About;
