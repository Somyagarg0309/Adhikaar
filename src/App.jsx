import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Static Components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

// Blog Pages
import BlogHome from './components/BlogWeb/BlogHome';
import BlogCreate from './components/BlogWeb/BlogCreate';
import BlogDetails from './components/BlogWeb/BlogDetails';

// Context
import { BlogProvider } from './components/BlogWeb/BlogContext';

function App() {
  return (
    <Router>
      <BlogProvider>
        <Routes>
          {/* Main Page Layout */}
          <Route path="/" element={
            <>
              <Header />
              <Navbar />
              <Carousel />
              <About />
              <Features />
              <Footer />
            </>
          } />

          {/* Blog Routes */}
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blogs/new" element={<BlogCreate />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BlogProvider>
    </Router>
  );
}

export default App;
