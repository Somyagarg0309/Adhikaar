// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="left-title">ADHIKAAR</div>
//       <div className="right-section">
//         <img src="src/assets/images/logo-img.png" alt="Adhikaar Icon" className="icon-img" />
//         <a href="#" className="register-link">Register</a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="left-title">ADHIKAAR</div>
      <div className="right-section">
        <img src="src/assets/images/logo-img.png" alt="Adhikaar Icon" className="icon-img" />
        <Link to="/login" className="auth-btn">Login</Link>
        <Link to="/signup" className="auth-btn">Signup</Link>
      </div>
    </header>
  );
};


export default Header;
