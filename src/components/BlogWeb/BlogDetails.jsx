import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import './blog.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="blog-container">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <h2 className="blog-title">{blog.title}</h2>
      <p className="blog-date">{blog.date}</p>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
