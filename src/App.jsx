import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Static Components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

// Feature Components
import ScannerHome from './components/ScannerWeb/ScannerHome';
import Bot from './components/ChatBotWeb/bot';

// Blog Feature Components
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
        {/* Main Landing Page */}
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

        {/* ChatBot Feature */}
        <Route path="/chatbot" element={<Bot />} />

        {/* Blog Feature Pages with internal navbar */}
        <Route
          path="/blogs"
          element={
            <>
              <BlogNavbar />
              <BlogHome />
            </>
          }
        />
        <Route
          path="/blogs/new"
          element={
            <>
              <BlogNavbar />
              <BlogForm />
            </>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <>
              <BlogNavbar />
              <BlogDetails />
            </>
          }
        />

        {/* Scanner Feature */}
        <Route path="/scanner" element={<ScannerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
