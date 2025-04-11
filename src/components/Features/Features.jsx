import React from 'react';
import ChatBot from './ChatBot';
import SchemesNews from './SchemesNews';
import Scanner from './Scanner';
import Blog from './Blog';
import './Features.css';

export const Features = () => {
  return (
   
    <div className = "section">
       <h1>Our Features</h1>
    <div className="features-section">
      
      <ChatBot />
      <SchemesNews />
      <Scanner />
      <Blog />
    </div>
    </div>
  
  );
};

export default Features;
