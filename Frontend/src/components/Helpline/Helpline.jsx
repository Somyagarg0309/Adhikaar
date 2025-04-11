import React from 'react';
import './Helpline.css';

const Helpline = () => {
  return (
    <div className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <p className="cta-heading">Need Urgent Support?</p>
          <p className="cta-subtext">
            Our 24/7 helpline offers immediate assistance for LGBTQ+ rights violations, mental health crises, and legal support.
          </p>
        </div>
        <a href="tel:123456789" className="cta-button outlined">
          📞 Call Now: 123-456-789
        </a>
      </div>
    </div>
  );
};

export default Helpline;
