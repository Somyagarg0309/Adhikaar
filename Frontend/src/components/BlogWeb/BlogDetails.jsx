import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "./api";
import "./blog.css";


const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog", err);
      }
    };


    fetchBlog();
  }, [id]);


  if (!blog) return <p>Loading...</p>;


  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button className="edit-btn" 
      onClick={() => navigate("/blogs/new", { state: { edit: true, blog } })}>Edit</button>
    </div>
  );
};


export default BlogDetails;

