import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const dummyBlogs = [
  { id: 1, title: "LGBTQ+ Rights Progress", author: "Alex", content: "Recent changes in laws..." },
  { id: 2, title: "Mental Health Awareness", author: "Jordan", content: "It's time we normalize therapy..." },
  { id: 3, title: "Trans Rights Milestones", author: "Sam", content: "New bills supporting trans communities..." },
  { id: 4, title: "Inclusive Education", author: "Taylor", content: "Curriculum changes for LGBTQ+ youth..." },
  { id: 5, title: "Community Support Initiatives", author: "Riley", content: "Grassroots efforts that made an impact..." },
  { id: 6, title: "Legal Aid Platforms", author: "Casey", content: "Tools offering legal support for LGBTQ+..." },
  { id: 7, title: "Global Pride Events", author: "Morgan", content: "A look at celebrations and resistance..." },
  { id: 8, title: "Safe Spaces for Youth", author: "Jamie", content: "Building mental and physical safe zones..." },
];

const BlogHome = () => {
  const [blogs] = useState(dummyBlogs);

  return (
    <div className="blog-home-wrapper">
      <h2 className="blog-title"> Blog Articles</h2>

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
