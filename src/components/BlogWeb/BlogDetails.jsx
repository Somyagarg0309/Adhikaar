import React from "react";
import { useParams } from "react-router-dom";
import "./blog.css";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-detail">
      <h2>Blog #{id} Details</h2>
      <p>This is where the blog content will be shown. (Mocked)</p>
    </div>
  );
};

export default BlogDetails;
