import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/blogs">Home</Link>
    <Link to="/blogs/new">Create Blog</Link>
  </nav>
);

export default Navbar;
