import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { Link } from 'react-router-dom';
import './blog.css';

const BlogHome = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="blog-container">
      <h2 className="blog-title">📚 Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-list-item">
            <Link to={`/blogs/${blog.id}`} className="blog-link">
              {blog.title}
            </Link>
            <p className="blog-date">{blog.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogHome;
