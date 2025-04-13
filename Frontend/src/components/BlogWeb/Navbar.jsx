import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const Navbar = () => (
  <nav className="navbar">
  <Link to="/blogs" className="nav-button">Blogs</Link>
  <Link to="/blogs/new" className="nav-button">Create Blog</Link>
</nav>
);

export default Navbar;
