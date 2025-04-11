import React, { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useNavigate } from 'react-router-dom';
import './blog.css';

const BlogCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    addBlog(newBlog);
    navigate('/blogs');
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">✍️ Write a New Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows="10"
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default BlogCreate;
