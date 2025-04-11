import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import blogImg from '../../assets/images/blogImg.png';
import './Features.css';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="feature-card" onClick={() => navigate('/blogs')}>
      <img src={blogImg} alt="Blog preview" className="feature-img" />
      <div className="icon"><FaBlog size={50} color="#0d6efd" /></div>
      <h3>Blog</h3>
      <p>Explore inspiring stories, case studies, and community voices on inclusion and justice.</p>
    </div>
  );
};

export default Blog;
