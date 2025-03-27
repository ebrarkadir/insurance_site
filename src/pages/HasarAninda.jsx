import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HasarAninda.css";

const HasarAninda = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const firmalar = [
    { name: "Allianz", tel: "0850 399 9999", logo: "allianz.png" },
    { name: "HDI", tel: "444 8 434", logo: "hdi.png" },
    { name: "Türk Nippon", tel: "0850 250 56 50", logo: "nippon.png" },
    { name: "Hepiyi", tel: "0850 241 78 00", logo: "hepiyi.png" },
    { name: "Quick", tel: "0850 755 1755", logo: "quick.png" },
    { name: "Magdeburger", tel: "0850 502 7373", logo: "magdeburger.png" },
    { name: "Ray", tel: "444 4 729", logo: "ray.png" },
  ];

  return (
    <div className="hasar-container">
      <aside className="hasar-sidebar">
        <h3>Yardım</h3>
        <ul>
          <li className={currentPath === "/bize-ulasin" ? "active" : ""}>
            <Link to="/bize-ulasin">Bize Ulaşın</Link>
          </li>
          <li
            className={currentPath === "/sikca-sorulan-sorular" ? "active" : ""}
          >
            <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
          </li>
          <li className={currentPath === "/hasar-aninda" ? "active" : ""}>
            <Link to="/hasar-aninda">Hasar Anında</Link>
          </li>
        </ul>
      </aside>

      <div className="hasar-content">
        <h1>Hasar Anında Yapmanız Gerekenler</h1>

        <div className="hasar-steps">
          <div className="step-box">
            <h2>1. Güvenliğinizi Sağlayın</h2>
            <p>
              Her şeyden önce güvenliğiniz önemli. Aracınızı emniyetli bir yere
              alın, dörtlülerinizi yakın ve gerekliyse polisi ya da ambulansı
              arayın.
            </p>
          </div>

          <div className="step-box">
            <h2>2. Sigorta Firmanızı ya da Bizi Arayın</h2>
            <p>
              Aşağıdaki sigorta firmalarından birine bağlıysanız doğrudan
              arayabilir veya bize ulaşabilirsiniz:
            </p>
            <div className="sigorta-grid">
              {firmalar.map((firma, index) => (
                <div className="sigorta-item" key={index}>
                  <img
                    src={require(`../assets/partners/${firma.logo}`)?.default}
                    alt={`${firma.name} Logo`}
                    className="firma-logo"
                  />

                  <p className="firma-tel">{firma.tel}</p>
                </div>
              ))}
            </div>
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
