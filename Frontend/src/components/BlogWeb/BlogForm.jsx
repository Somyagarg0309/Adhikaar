import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const BlogForm = () => {
  const [form, setForm] = useState({ title: "", author: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted blog:", form);
    navigate("/blogs");
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" rows={6} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
