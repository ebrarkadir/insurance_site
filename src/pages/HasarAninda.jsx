import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HasarAninda.css";

const HasarAninda = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const firmalar = [
    "Allianz Sigorta",
    "HDI Sigorta",
    "Türk Nippon Sigorta",
    "Hepiyi Sigorta",
    "Quick Sigorta",
    "Magdeburger Sigorta",
    "Ray Sigorta",
  ];

  return (
    <div className="hasar-container">
      {/* Sidebar */}
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
        </ul>
      </aside>

      {/* Sağ İçerik */}
      <div className="hasar-content">
        <h1>Hasar Anında Yapmanız Gerekenler</h1>

        <div className="hasar-steps">
          <div className="step-box">
            <h2>1. Güvenliğinizi Sağlayın</h2>
            <p>
              Her şeyden önce güvenliğiniz önemli. Aracınızı emniyetli bir yere alın,
              dörtlülerinizi yakın ve gerekliyse polisi ya da ambulansı arayın.
            </p>
          </div>

          <div className="step-box">
            <h2>2. Sigorta Firmanızı ya da Bizi Arayın</h2>
            <p>
              Aşağıdaki sigorta firmalarından birine bağlıysanız doğrudan arayabilir
              veya bize ulaşabilirsiniz:
            </p>
            <ul className="firma-listesi">
              {firmalar.map((firma, index) => (
                <li key={index}>{firma}</li>
              ))}
            </ul>
          </div>

          <div className="step-box">
            <h2>3. Kaza Tespit Tutanağını Doldurun</h2>
            <p>
              Kazaya karışan taraflarla birlikte anlaşmalı şekilde
              <strong> Kaza Tespit Tutanağı</strong> doldurun. İndirmek için:
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

        {/* İletişim */}
        <div className="ek-bilgi-kutulari">
          <div className="detayli-bilgi-kutusu">
            <p>Detaylı bilgi için:</p>
            <span className="tel-no">0272 214 76 96</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasarAninda;
