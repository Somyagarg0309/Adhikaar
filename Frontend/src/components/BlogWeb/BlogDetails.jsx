// import React from "react";
// import { useParams } from "react-router-dom";
// import "./blog.css";

// const BlogDetails = () => {
//   const { id } = useParams();

//   return (
//     <div className="blog-detail">
//       <h2>Blog #{id} Details</h2>
//       <p>This is where the blog content will be shown. (Mocked)</p>
//     </div>
//   );
// };

// export default BlogDetails;


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
      <button onClick={() => navigate("/blogs/new", { state: { edit: true, blog } })}>Edit</button>
    </div>
  );
};


export default BlogDetails;

