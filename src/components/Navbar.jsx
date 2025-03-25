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
                  <a href="#">Zorunlu Trafik Sigortası</a>
                  <a href="#">Kasko Sigortası</a>
                  <a href="#">İhtiyari Mali Mesuliyet Sigortası</a>
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
                  <a href="#">Bize Ulaşın</a>
                  <a href="#">Sıkça Sorulan Sorular</a>
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
                    <a href="#">Zorunlu Trafik Sigortası</a>
                  </li>
                  <li>
                    <a href="#">Kasko Sigortası</a>
                  </li>
                  <li>
                    <a href="#">İhtiyari Mali Mesuliyet Sigortası</a>
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
                    <a href="#">Bize Ulaşın</a>
                  </li>
                  <li>
                    <a href="#">Sıkça Sorulan Sorular</a>
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
