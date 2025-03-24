import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Ekibimiz.css";

const Ekibimiz = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const ekip = [
    { ad: "SİBEL ÇETİN", unvan: "Kurucu, Genel Müdür Yardımcısı" },
    { ad: "MUAMMER ÇETİN", unvan: "Genel Müdürü" },
    { ad: "Orçun ÇETİN", unvan: "Müşteri Hizmetleri Sorumlusu" },
    { ad: "Enes Kayra ÇETİN", unvan: "Sigorta Danışmanı" },
  ];

  return (
    <div className="ekip-container">
      <aside className="ekip-sidebar">
        <h3>Bizi Tanıyın</h3>
        <ul>
          <li className={currentPath === "/sirket-bilgileri" ? "active" : ""}>
            <Link to="/sirket-bilgileri">Şirket Bilgileri</Link>
          </li>
          <li className={currentPath === "/ekibimiz" ? "active" : ""}>
            <Link to="/ekibimiz">Ekibimiz</Link>
          </li>
        </ul>
      </aside>

      <div className="ekip-icerik">
        <h1>Ekibimiz</h1>
        <div className="ekip-grid">
          {ekip.map((uye, index) => (
            <div className="ekip-karti" key={index}>
              <div className="foto-yok"></div>
              <h3>{uye.ad}</h3>
              <p>{uye.unvan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ekibimiz;
