// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./blog.css";

// const BlogForm = () => {
//   const [form, setForm] = useState({ title: "", author: "", content: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted blog:", form);
//     navigate("/blogs");
//   };

//   return (
//     <form className="blog-form" onSubmit={handleSubmit}>
//       <h2>Create Blog</h2>
//       <input name="title" placeholder="Title" onChange={handleChange} required />
//       <input name="author" placeholder="Author" onChange={handleChange} required />
//       <textarea name="content" placeholder="Content" rows={6} onChange={handleChange} required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BlogForm;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createBlog, updateBlog } from "./api";
import "./blog.css";


const BlogForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editing = location.state?.edit || false;
  const existingBlog = location.state?.blog;


  const [form, setForm] = useState({
    title: existingBlog?.title || "",
    content: existingBlog?.content || "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Unauthorized");


    try {
      if (editing) {
        await updateBlog(existingBlog._id, form, token);
        alert("Blog updated");
      } else {
        await createBlog(form, token);
        alert("Blog created");
      }
      navigate("/blogs");
    } catch (err) {
      console.error("Error submitting blog", err);
      alert("Failed to submit blog");
    }
  };


  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Blog" : "Create Blog"}</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" rows={6} value={form.content} onChange={handleChange} required />
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    </form>
  );
};


export default BlogForm;

