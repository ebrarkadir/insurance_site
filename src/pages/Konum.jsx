import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Konum.css";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";

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
          Mecidiye Mahallesi Milli Birlik Caddesi, Kızılkaya Apartmanı No:102/B<br />
          Afyonkarahisar Merkez, Türkiye
        </p>

        <div className="map-wrapper">
          <iframe
            title="Çetin Sigorta Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.546508094533!2d30.54100737567786!3d38.76689477177121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb73f38ed4e5ed%3A0x1843395a1bb7b57f!2sYarenler%2C%208.%20Sk.%20No%3A106%2C%2003100%20Afyonkarahisar%20Merkez%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1711398390096!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="yol-tarifi">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Yarenler,+8.+Sk.+No:106,+03100+Afyonkarahisar+Merkez%2FAfyonkarahisar"
            target="_blank"
            rel="noreferrer"
          >
            Yol Tarifi Al
          </a>
        </div>

        <div className="konum-extra-box">
          <h2>Çalışma Saatlerimiz</h2>
          <ul>
            <li><strong>Pazartesi - Cuma:</strong> 09:00 - 19:30</li>
            <li><strong>Cumartesi:</strong> 10:00 - 19:00</li>
            <li><strong>Pazar:</strong> Kapalı</li>
          </ul>
        </div>
      </div>
  
    </div>
    

  );
};

export default Konum;
