import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <img src={logo} alt="Çetin Sigorta Logo" className="logo" />
          <span className="site-title">Çetin Sigorta</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Sigorta</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">İletişim</a></li>
          <li><a href="#">Yardım Alın</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
