import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
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
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="Çetin Sigorta Logo" className="logo" />
          </Link>
          <Link to="/" className="site-title no-hover">
            Çetin Sigorta
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>
            ×
          </button>

          {/* MASAÜSTÜ */}
          <div className="desktop-menu">
            <li className="dropdown">
              <a href="#">Sigorta</a>
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <h4>
                    <FaCarSide className="icon" /> Araç
                  </h4>
                  <a href="/trafik-sigortasi">Zorunlu Trafik Sigortası</a>
                  <a href="/kasko">Kasko Sigortası</a>
                  <a href="/imm">İhtiyari Mali Mesuliyet Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4>
                    <FaHome className="icon" /> Doğal Afet
                  </h4>
                  <a href="#">DASK Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4>
                    <FaHeartbeat className="icon" /> Sağlık
                  </h4>
                  <a href="#">Tamamlayıcı Sağlık Sigortası</a>
                </div>
                <div className="dropdown-column">
                  <h4>
                    <FaPlaneDeparture className="icon" /> Seyahat
                  </h4>
                  <a href="#">Seyahat Sağlık Sigortası</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">Hakkımızda</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4>
                    <FaInfoCircle className="icon" /> Hakkımızda
                  </h4>
                  <a href="/sirket-bilgileri">Şirket Bilgileri</a>
                  <a href="/ekibimiz">Ekibimiz</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="/iletisim">İletişim</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4>
                    <span className="icon">📍</span> İletişim
                  </h4>
                  <a href="/iletisim">İletişim Bilgileri</a>
                  <a href="/konum">Konum</a>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">Yardım Alın</a>
              <div className="dropdown-menu single-column">
                <div className="dropdown-column">
                  <h4>
                    <span className="icon">❓</span> Yardım Alın
                  </h4>
                  <a href="/bize-ulasin">Bize Ulaşın</a>
                  <a href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</a>
                  <a href="/hasar-aninda">Hasar Anında</a>
                  <a href="/sigorta-teminatlari">Sigorta Teminatları</a>
                </div>
              </div>
            </li>
          </div>

          {/* MOBİL */}
          <div className="mobile-menu">
            <li>
              <details>
                <summary>Sigorta</summary>
                <ul>
                  <h5>Araç</h5>
                  <li>
                    <a href="/trafik-sigortasi">Zorunlu Trafik Sigortası</a>
                  </li>
                  <li>
                    <a href="/kasko">Kasko Sigortası</a>
                  </li>
                  <li>
                    <a href="/imm">İhtiyari Mali Mesuliyet Sigortası</a>
                  </li>

                  <h5>Doğal Afet</h5>
                  <li>
                    <a href="#">DASK Sigortası</a>
                  </li>

                  <h5>Sağlık</h5>
                  <li>
                    <a href="#">Tamamlayıcı Sağlık Sigortası</a>
                  </li>

                  <h5>Seyahat</h5>
                  <li>
                    <a href="#">Seyahat Sağlık Sigortası</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>HAKKIMIZDA</summary>
                <ul>
                  <li>
                    <a href="/sirket-bilgileri">Şirket Bilgileri</a>
                  </li>
                  <li>
                    <a href="/ekibimiz">Ekibimiz</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>İLETİŞİM</summary>
                <ul>
                  <li>
                    <a href="/iletisim">İletişim Bilgileri</a>
                  </li>
                  <li>
                    <a href="/konum">Konum</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>YARDIM ALIN</summary>
                <ul>
                  <li>
                    <a href="/bize-ulasin">Bize Ulaşın</a>
                  </li>
                  <li>
                    <a href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</a>
                  </li>
                  <li>
                    <a href="/hasar-aninda">Hasar Anında</a>
                  </li>
                  <li>
                    <a href="/sigorta-teminatlari">Sigorta Teminatları</a>
                  </li>
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
