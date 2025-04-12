// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Static Components
// import Header from './components/Header/Header';
// import Login from './components/Header/Login';
// import Signup from './components/Header/Signup';
// import Navbar from './components/Navbar/Navbar';
// import Carousel from './components/Carousel/Carousel';
// import About from './components/About/About';
// import Features from './components/Features/Features';
// import Footer from './components/Footer/Footer';

// // Feature Components
// import ScannerHome from './components/ScannerWeb/ScannerHome';
// import Bot from './components/ChatBotWeb/bot';
// import SchemesNewsHome from './components/SchemesNewsWeb/SchemesNewsHome';

// // Blog Feature Components
// import {
//   BlogHome,
//   BlogForm,
//   BlogDetails,
//   Navbar as BlogNavbar
// } from './components/BlogWeb';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Main Landing Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Header />
//               <Navbar />
//               <Carousel />
//               <About />
//               <Features />
//               <Footer />
//             </>
//           }
//         />

//         {/* ChatBot Feature */}
//         <Route path="/chatbot" element={<Bot />} />

//         {/* Blog Feature Pages */}
//         <Route
//           path="/blogs"
//           element={
//             <>
//               <BlogNavbar />
//               <BlogHome />
//             </>
//           }
//         />
//         <Route
//           path="/blogs/new"
//           element={
//             <>
//               <BlogNavbar />
//               <BlogForm />
//             </>
//           }
//         />
//         <Route
//           path="/blogs/:id"
//           element={
//             <>
//               <BlogNavbar />
//               <BlogDetails />
//             </>
//           }
//         />

//         {/* Scanner Feature */}
//         <Route path="/scanner" element={<ScannerHome />} />

//         {/* Schemes & News Feature */}
//         <Route path="/schemes-news" element={<SchemesNewsHome />} />
        
//         {/* ✅ Auth Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Static Components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';

// Feature Components
import ScannerHome from './components/ScannerWeb/ScannerHome';
import Bot from './components/ChatBotWeb/bot';
import SchemesNewsHome from './components/SchemesNewsWeb/SchemesNewsHome';

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
        {/* Home Page */}
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

        {/* ChatBot */}
        <Route
          path="/chatbot"
          element={
            <>
              <Navbar />
              <Bot />
            </>
          }
        />

        {/* Scanner */}
        <Route
          path="/scanner"
          element={
            <>
              <Navbar />
              <ScannerHome />
            </>
          }
        />

        {/* Schemes & News */}
        <Route
          path="/schemes-news"
          element={
            <>
              <Navbar />
              <SchemesNewsHome />
            </>
          }
        />

        {/* Blog Routes (Using separate BlogNavbar as before) */}
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

        {/* ✅ Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
