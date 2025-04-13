import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';

import ScannerHome from './components/ScannerWeb/ScannerHome';
import Bot from './components/ChatBotWeb/bot';
import SchemesNewsHome from './components/SchemesNewsWeb/SchemesNewsHome';

import {
  BlogHome,
  BlogForm,
  BlogDetails,
  Navbar as BlogNavbar
} from './components/BlogWeb';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Carousel />
              <About />
              <Features />
              <Footer />
            </>
          }
        />

        <Route
          path="/chatbot"
          element={
            <>
              <Navbar />
              <Bot />
            </>
          }
        />

        <Route
          path="/scanner"
          element={
            <>
              <Navbar />
              <ScannerHome />
            </>
          }
        />

        <Route
          path="/schemes-news"
          element={
            <>
              <Navbar />
              <SchemesNewsHome />
            </>
          }
        />

<Route
  path="/blogs"
  element={
    <>
      <Navbar />
      <div className="blog-navbar">
        <BlogNavbar />
      </div>
      <BlogHome />
    </>
  }
/>
<Route
  path="/blogs/new"
  element={
    <>
      <Navbar />
      <div className="blog-navbar">
        <BlogNavbar />
      </div>
      <BlogForm />
    </>
  }
/>
<Route
  path="/blogs/:id"
  element={
    <>
      <Navbar />
      <div className="blog-navbar">
        <BlogNavbar />
      </div>
      <BlogDetails />
    </>
  }
/>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
