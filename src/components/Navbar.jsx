import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import {
  FaCarSide,
  FaHome,
  FaHeartbeat,
  FaPlaneDeparture,
  FaInfoCircle,
} from "react-icons/fa";

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

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>×</button>

          {/* MASAÜSTÜ MENÜ */}
          <div className="desktop-menu">
            <li className="dropdown">
              <a href="#">Sigorta</a>
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <h4><FaCarSide className="icon" /> Araç</h4>
                  <a href="#">Zorunlu Trafik Sigortası</a>
                  <a href="#">Kasko Sigortası</a>
                  <a href="#">İhtiyari Mali Mesuliyet Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4><FaHome className="icon" /> Doğal Afet</h4>
                  <a href="#">DASK Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4><FaHeartbeat className="icon" /> Sağlık</h4>
                  <a href="#">Tamamlayıcı Sağlık Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4><FaPlaneDeparture className="icon" /> Seyahat</h4>
                  <a href="#">Seyahat Sağlık Sigortası</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">Hakkımızda</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4><FaInfoCircle className="icon" /> Hakkımızda</h4>
                  <a href="#">Şirket Bilgileri</a>
                  <a href="#">Ekibimiz</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">İletişim</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4><span className="icon">📍</span> İletişim</h4>
                  <a href="#">İletişim Bilgileri</a>
                  <a href="#">Konum</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">Yardım Alın</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4><span className="icon">❓</span> Yardım Alın</h4>
                  <a href="#">Bize Ulaşın</a>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </div>
              </div>
            </li>
          </div>

          {/* MOBİL MENÜ */}
          <div className="mobile-menu">
            <li>
              <details>
                <summary>Sigorta</summary>
                <ul>
                  <li><a href="#">Zorunlu Trafik Sigortası</a></li>
                  <li><a href="#">Kasko Sigortası</a></li>
                  <li><a href="#">İhtiyari Mali Mesuliyet Sigortası</a></li>
                  <li><a href="#">DASK Sigortası</a></li>
                  <li><a href="#">Tamamlayıcı Sağlık Sigortası</a></li>
                  <li><a href="#">Seyahat Sağlık Sigortası</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Hakkımızda</summary>
                <ul>
                  <li><a href="#">Şirket Bilgileri</a></li>
                  <li><a href="#">Ekibimiz</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>İletişim</summary>
                <ul>
                  <li><a href="#">İletişim Bilgileri</a></li>
                  <li><a href="#">Konum</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Yardım Alın</summary>
                <ul>
                  <li><a href="#">Bize Ulaşın</a></li>
                  <li><a href="#">Sıkça Sorulan Sorular</a></li>
                </ul>
              </details>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
