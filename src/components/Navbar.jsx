import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <img src={logo} alt="Çetin Sigorta Logo" className="logo" />
          <span className="site-title">Çetin Sigorta</span>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        {/* Mobil Menü */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={closeMenu}>×</button>
          <li><a href="#" onClick={closeMenu}>Sigorta</a></li>
          <li><a href="#" onClick={closeMenu}>Hakkımızda</a></li>
          <li><a href="#" onClick={closeMenu}>İletişim</a></li>
          <li><a href="#" onClick={closeMenu}>Yardım Alın</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
