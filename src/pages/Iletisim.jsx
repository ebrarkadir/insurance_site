import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Iletisim.css";

const Iletisim = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="iletisim-container">
      <aside className="iletisim-sidebar">
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

      <div className="iletisim-inner">
        <h1>İletişim Bilgilerimiz</h1>

        <div className="iletisim-grid">
          <div className="person-card first-row">
            <h3>Genel İletişim</h3>
            <p>
              <strong>Telefon:</strong> 0272 214 76 96
            </p>
            <p>
              <strong>Kurumsal E-posta:</strong> info@mcetinsigorta.com
            </p>
          </div>

          <div className="person-card first-row">
            <h3>Muammer Çetin</h3>
            <p>
              <strong>Telefon:</strong> 0543 334 77 51
            </p>
            <p>
              <strong>E-posta:</strong> cetinsigorta03@hotmail.com
            </p>
          </div>

          <div className="person-card">
            <h3>Orçun Çetin</h3>
            <p>
              <strong>Telefon:</strong> 0541 240 04 02
            </p>
            <p>
              <strong>E-posta:</strong> orcun-cetin03@hotmail.com
            </p>
          </div>

          <div className="person-card">
            <h3>Enes Kayra Çetin</h3>
            <p>
              <strong>Telefon:</strong> 0546 618 41 17
            </p>
            <p>
              <strong>E-posta:</strong> eneskayracetin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
