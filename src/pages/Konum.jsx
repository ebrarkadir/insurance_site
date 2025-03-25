import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Konum.css";

const Konum = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="konum-container">
      <aside className="konum-sidebar">
        <h3>İletişim</h3>
        <ul>
          <li className={currentPath === "/iletisim" ? "active" : ""}>
            <Link to="/iletisim">İletişim Bilgileri</Link>
          </li>
          <li className={currentPath === "/konum" ? "active" : ""}>
            <Link to="/konum">Konum</Link>
          </li>
        </ul>
      </aside>

      <div className="konum-inner">
        <h1>Konum</h1>
        <p className="adres-bilgi">
          Mecidiye Mahallesi Milli Birlik Caddesi, Kızılkaya Apartmanı No:102/B
          Afyonkarahisar, Türkiye
        </p>

        <div className="map-wrapper">
          <iframe
            title="Çetin Sigorta Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.247135248871!2d30.54654137574905!3d38.765117571759755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb7be71e5346e7%3A0xf3cc0e9c017f59bb!2zTWlsbGkgQmlybGlrIENhZGRlc2ksIEFmeW9ua2FyYWhpc2Fy!5e0!3m2!1str!2str!4v1711397543001!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Konum;
