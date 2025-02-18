import React from 'react';
import '../Styles/global.css';

function Header() {
  return (
    <div className="header">
      {/* Brand Name in the top-left corner */}
      <div className="brand-name">Prodmast</div>

      {/* Navigation Links */}
      <div className="nav">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Services
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>

      {/* Button Container */}
      <div className="header-btn-container">
        <button className="button">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
