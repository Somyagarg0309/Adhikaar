import React from 'react';
import { FaComments } from 'react-icons/fa';
import chatbotImg from '../../assets/images/chatbotImg.avif';
import './Features.css';

const ChatBot = () => {
  return (
    <div className="feature-card">
      <img src={chatbotImg} alt="Chatbot preview" className="feature-img" />
      <div className="icon"><FaComments size={50} color="#0d6efd" /></div>
      <h3>Chatbot</h3>
      <p>Get instant answers, resources, and legal aid through our smart LGBTQ+ rights assistant.</p>
    </div>
  );
};

export default ChatBot;
