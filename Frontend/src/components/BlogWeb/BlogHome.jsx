import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs, deleteBlog } from "./api";
import "./blog.css";


const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetchBlogs();
  }, []);


  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };


  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Unauthorized");


    try {
      await deleteBlog(id, token);
      fetchBlogs(); // Refresh list
    } catch (err) {
      console.error("Error deleting blog", err);
      alert("Could not delete blog");
    }
  };


  return (
    <div className="blog-home-wrapper">
      <h2 className="blog-title"> Blog Articles</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h3>{blog.title}</h3>
            {/* <p><strong>Author:</strong> {blog.author || ""}</p> */}
            <p>{blog.content.slice(0, 100)}...</p>
            <Link to={`/blogs/${blog._id}`} className="read-btn">Read More</Link>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default BlogHome;


