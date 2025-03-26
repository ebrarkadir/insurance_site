import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BizeUlasin.css";
import { FaWhatsapp } from "react-icons/fa";

const BizeUlasin = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="konum-container">
      <aside className="konum-sidebar">
        <h3>İletişim</h3>
        <ul>
          <li className={currentPath === "/bize-ulasin" ? "active" : ""}>
            <Link to="/bize-ulasin">Bize Ulaşın</Link>
          </li>
          <li className={currentPath === "/sss" ? "active" : ""}>
            <Link to="/sss">Sıkça Sorulan Sorular</Link>
          </li>
        </ul>
      </aside>

      <div className="konum-inner">
        <h1>Bize Ulaşın</h1>
        <p className="info-text">
          Her türlü soru, öneri ve sigorta talepleriniz için bizimle iletişime
          geçebilirsiniz.
        </p>
        <div className="contact-form">
          <h2>İletişim Formu</h2>
          <form>
            <input type="text" placeholder="Adınız Soyadınız" required />
            <input type="email" placeholder="E-posta Adresiniz" required />
            <textarea rows="5" placeholder="Mesajınız" required></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>

        <div className="contact-section">
          <div className="whatsapp-container">
            <a
              href="https://wa.me/905433347751"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FaWhatsapp className="whatsapp-icon" />
              WhatsApp'tan Ulaşın
            </a>
          </div>

          <div className="contact-details">
            <p>
              <strong>Telefon:</strong> 0272 214 76 96
            </p>
            <p>
              <strong>E-posta:</strong> info@mcetinsigorta.com
            </p>
          </div>
        </div>

        <div className="ekip-link-box">
          <p>
            Ekibimizle birebir iletişim kurmak için{" "}
            <Link to="/iletisim" className="ekip-link">
              buradan ulaşabilirsiniz
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BizeUlasin;
