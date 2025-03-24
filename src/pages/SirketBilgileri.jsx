import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SirketBilgileri.css";

const SirketBilgileri = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sirket-sayfasi-container">
      <aside className="sirket-sidebar">
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

      <div className="sirket-bilgileri-content">
        <h1>Biz Kimiz?</h1>
        <p>
          Çetin Sigorta, bireylerin ve kurumların karşılaşabileceği risklere karşı güvenli çözümler sunmak amacıyla kurulmuştur.
          Yılların verdiği tecrübe ile müşterilerine hızlı, şeffaf ve güvenilir hizmet sunmayı ilke edinmiştir.
        </p>
        <p>
          Afyonkarahisar merkezli şirketimiz; trafik sigortasından sağlık sigortasına, kasko sigortasından seyahat sigortalarına kadar geniş
          bir yelpazede sigorta danışmanlığı hizmeti sunmaktadır. Müşteri memnuniyetini esas alan yaklaşımımızla, en uygun poliçeyi
          en avantajlı şekilde sunuyoruz.
        </p>
        <p>
          Hedefimiz, sadece bir sigorta aracı kurumu olmak değil; güvenilir bir yol arkadaşı olmaktır. Bu yolda sizin yanınızda olmak için
          teknolojiyi, deneyimi ve uzmanlığı bir araya getiriyoruz.
        </p>
        <p>
          Çetin Sigorta ile hayatınızı güvence altına alın.
        </p>
      </div>
    </div>
  );
};

export default SirketBilgileri;
