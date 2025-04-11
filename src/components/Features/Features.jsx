import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import ChatBot from './Chatbot';
import Scanner from './Scanner';
import SchemesNews from './SchemesNews';
import './Features.css';

const Features = () => {
  return (
    <div>
      <h1 className="features-title">Our Features</h1>
      <section className="features-section">
        <div className="features-grid">
          <Link to="/chatbot">
            <ChatBot />
          </Link>
          <Link to="/schemes-news">
            <SchemesNews />
          </Link>
          <Link to="/scanner">
            <Scanner />
          </Link>
          <Link to="/blogs">
            <Blog />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
