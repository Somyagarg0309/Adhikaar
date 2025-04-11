import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Features.css'; // if you have custom styling

const Blog = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/blogs');
  };

  return (
    <div className="feature-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="icon"><FaBlog size={50} color="#0d6efd" /></div>
      <h3>Blog</h3>
      <p>Explore inspiring stories, case studies, and community voices on inclusion and justice.</p>
    </div>
  );
};

export default Blog;
