import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const dummyBlogs = [
  { id: 1, title: "LGBTQ+ Rights Progress", author: "Alex", content: "Recent changes in laws..." },
  { id: 2, title: "Mental Health Awareness", author: "Jordan", content: "It's time we normalize therapy..." },
  { id: 3, title: "LGBTQ+ Rights Progress", author: "Alex", content: "Recent changes in laws..." },
  { id: 4, title: "Mental Health Awareness", author: "Jordan", content: "It's time we normalize therapy..." },
  { id: 5, title: "LGBTQ+ Rights Progress", author: "Alex", content: "Recent changes in laws..." },
  { id: 6, title: "Mental Health Awareness", author: "Jordan", content: "It's time we normalize therapy..." },
  { id: 7, title: "LGBTQ+ Rights Progress", author: "Alex", content: "Recent changes in laws..." },
  { id: 8, title: "Mental Health Awareness", author: "Jordan", content: "It's time we normalize therapy..." },

];

const BlogHome = () => {
  const [blogs] = useState(dummyBlogs);

  return (
    <div>
      <h2 className="blog-title">Blogs</h2>
     
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.content.slice(0, 100)}...</p>
            <Link to={`/blogs/${blog.id}`} className="read-btn">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
