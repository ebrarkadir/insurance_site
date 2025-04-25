import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BizeUlasin.css";
import { FaWhatsapp } from "react-icons/fa";

const BizeUlasin = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [formData, setFormData] = useState({
    adsoyad: "",
    email: "",
    mesaj: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append("Ad Soyad", formData.adsoyad);
    formBody.append("Email", formData.email);
    formBody.append("Mesaj", formData.mesaj);
    formBody.append("_captcha", "false");
    formBody.append("_template", "table");
    formBody.append("_subject", "Yeni İletişim Mesajı");

    try {
      const response = await fetch("https://formsubmit.co/cetinebrarkadir@gmail.com", {
        method: "POST",
        body: formBody,
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({ adsoyad: "", email: "", mesaj: "" });
      } else {
        alert("Mesaj gönderilemedi.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu.");
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="konum-container">
      <div className="konum-left-panel">
        <aside className="hasar-sidebar">
          <h3>Yardım</h3>
          <ul>
            <li className={currentPath === "/bize-ulasin" ? "active" : ""}>
              <Link to="/bize-ulasin">Bize Ulaşın</Link>
            </li>
            <li className={currentPath === "/sikca-sorulan-sorular" ? "active" : ""}>
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
            </li>
            <li className={currentPath === "/hasar-aninda" ? "active" : ""}>
              <Link to="/hasar-aninda">Hasar Anında</Link>
            </li>
            <li className={currentPath === "/sigorta-teminatlari" ? "active" : ""}>
              <Link to="/sigorta-teminatlari">Sigorta Teminatları</Link>
            </li>
          </ul>
        </aside>

        <div className="detayli-bilgi-kutusu">
          <p>📞 Detaylı bilgi için:</p>
          <span className="tel-no">0272 214 76 96</span>
        </div>

        <div className="pdf-kutusu">
          <p className="pdf-baslik">
            <span role="img" aria-label="pdf">📄</span> Kaza Tespit Tutanağı
          </p>
          <a
            href="/files/kaza-tespit-tutanağı.pdf"
            download
            className="pdf-indir-link"
          >
            PDF Dökümanı İndir
          </a>
        </div>
      </div>

      <div className="konum-inner">
        <h1>Bize Ulaşın</h1>
        <p className="info-text">
          Her türlü soru, öneri ve sigorta talepleriniz için bizimle iletişime geçebilirsiniz.
        </p>

        <div className="contact-form">
          <h2>İletişim Formu</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="adsoyad"
              placeholder="Adınız Soyadınız"
              required
              value={formData.adsoyad}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="mesaj"
              rows="5"
              placeholder="Mesajınız"
              required
              value={formData.mesaj}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Gönder</button>
          </form>
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">
                <div className="popup-icon">✔</div>
                <h2 className="popup-title">Mesajınız Alındı</h2>
                <p className="popup-message">En kısa sürede sizinle iletişime geçeceğiz.</p>
                <button onClick={closePopup} className="popup-close-btn">Kapat</button>
              </div>
            </div>
          )}
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
              <strong>İş Yeri Telefon:</strong> 0272 214 76 96
              <strong> | GSM:</strong> 0543 334 77 51, 0541 240 04 02
            </p>
            <p>
              <strong>E-posta:</strong> info@mcetinsigorta.com
            </p>
          </div>
        </div>

        <div className="ekip-link-box">
          <p>
            Ekibimizle birebir iletişim kurmak için {" "}
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
