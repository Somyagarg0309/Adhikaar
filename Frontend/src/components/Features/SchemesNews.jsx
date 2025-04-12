import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import schemesNewsImg from '../../assets/images/schemesNewsImg.jpg';
import './Features.css';

const SchemesNews = () => {
  return (
    <div className="feature-card">
      <img src={schemesNewsImg} alt="Schemes & News preview" className="feature-img" />
      <div className="icon"><FaNewspaper size={50} color="#0d6efd" /></div>
      <h3>Schemes & News</h3>
      <p>Stay updated with the latest policies, legal reforms, inclusive schemes, and government initiatives.</p>
    </div>
  );
};

export default SchemesNews;
