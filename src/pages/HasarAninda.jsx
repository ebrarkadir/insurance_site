import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HasarAninda.css";

import allianz from "../assets/partners/allianz.png";
import hdi from "../assets/partners/hdi.png";
import nippon from "../assets/partners/nippon.png";
import hepiyi from "../assets/partners/hepiyi.png";
import quick from "../assets/partners/quick.png";
import magdeburger from "../assets/partners/magdeburger.png";
import ray from "../assets/partners/ray.png";

const HasarAninda = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const firmalar = [
    { name: "Ray", tel: "444 4 729", logo: ray },
    { name: "Allianz", tel: "0850 399 9999", logo: allianz },
    { name: "HDI", tel: "444 8 434", logo: hdi },
    { name: "Türk Nippon", tel: "0850 250 56 50", logo: nippon },
    { name: "Hepiyi", tel: "0850 241 78 00", logo: hepiyi },
    { name: "Quick", tel: "0850 755 1755", logo: quick },
    { name: "Magdeburger", tel: "0850 502 7373", logo: magdeburger },
    
  ];

  return (
    <div className="hasar-container">
      <div className="hasar-left-panel">
        <aside className="hasar-sidebar">
          <h3>Yardım</h3>
          <ul>
            <li className={currentPath === "/bize-ulasin" ? "active" : ""}>
              <Link to="/bize-ulasin">Bize Ulaşın</Link>
            </li>
            <li
              className={
                currentPath === "/sikca-sorulan-sorular" ? "active" : ""
              }
            >
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
            </li>
            <li className={currentPath === "/hasar-aninda" ? "active" : ""}>
              <Link to="/hasar-aninda">Hasar Anında</Link>
            </li>
            <li
              className={currentPath === "/sigorta-teminatlari" ? "active" : ""}
            >
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
            <span role="img" aria-label="pdf">
              📄
            </span>{" "}
            Kaza Tespit Tutanağı
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

      <div className="hasar-content">
        <h1>Hasar Anında Yapmanız Gerekenler</h1>

        <div className="hasar-steps">
          <div className="step-box">
            <h2>1. Güvenliğinizi Sağlayın</h2>
            <p>
              Aracınızı emniyetli bir yere alın, gerekirse polisi veya ambulansı
              arayın.
            </p>
          </div>

          <div className="step-box">
            <h2>2. Sigorta Firmanızı ya da Bizi Arayın</h2>
            <p>
              Aşağıdaki firmalardan birine bağlıysanız doğrudan ya da bize
              ulaşın:
            </p>
            <div className="sigorta-grid">
              {firmalar.map((firma, index) => (
                <div className="sigorta-item" key={index}>
                  <img
                    src={firma.logo}
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
              Kaza tespit tutanağını eksiksiz doldurmayı unutmayın. Gerekirse
              PDF’i buradan indirebilirsiniz:
            </p>
            <a
              href="/files/kaza-tespit-tutanağı.pdf"
              download
              className="pdf-indir-link"
            >
              PDF Dökümanı İndir
            </a>
          </div>

          <div className="step-box">
            <h2>4.Çarpma-Çarpışma Hasarlarında Gerekli Belgeler</h2>
            <ul>
              <li>Kaza tespit tutanağı</li>
              <li>Hasarlı kısımları gösteren fotoğraflar</li>
              <li>Sigortalının ehliyet/ruhsat fotokopisi</li>
              <li>Beyan (kaza tespit tutanağı yoksa)</li>
              <li>Fatura (anlaşmalı olmayan servis için)</li>
              <li>IBAN ve banka bilgileri</li>
            </ul>

            <h2>5. Cam Hasarlarında Gerekli Belgeler</h2>
            <ul>
              <li>Hasarın nasıl oluştuğuna dair beyan veya zabıt</li>
              <li>Ruhsat fotokopisi</li>
              <li>Ehliyet fotokopisi (hasar seyir halinde olduysa)</li>
              <li>Hasarlı camın fotoğrafları</li>
              <li>Fatura (anlaşmalı olmayan servis için)</li>
              <li>Ödeme yapılacak banka adı, şube ve IBAN</li>
            </ul>
          </div>

          <div className="step-box">
            <h2>6. Park Halindeyken Gerçekleşen Hasarlarda</h2>
            <ul>
              <li>Polis zabtı</li>
              <li>Beyan (zabıt yoksa)</li>
              <li>Ruhsat fotokopisi</li>
              <li>Hasar fotoğrafları</li>
              <li>Fatura (anlaşmalı olmayan servis için)</li>
              <li>Ödeme yapılacak banka adı, şube ve IBAN</li>
            </ul>
          </div>

          <div className="step-box">
            <h2>7. Radyo/Teyp Çalınması Durumunda</h2>
            <ul>
              <li>Polis zabtı</li>
              <li>Ruhsat fotokopisi</li>
              <li>Hasar fotoğrafları</li>
              <li>Fatura (anlaşmalı olmayan servis için)</li>
              <li>Ödeme yapılacak banka adı, şube ve IBAN</li>
            </ul>
          </div>

          <div className="step-box">
            <h2>8. Araç Çalınması Durumunda</h2>
            <ul>
              <li>Polis zabtı</li>
              <li>Temiz kağıdı (vergi makbuzları ve borcu yoktur yazısı)</li>
              <li>Trafikten kaydın silindiğine dair belge</li>
              <li>Asayiş şubeden alınan “bulunamadı” yazısı</li>
              <li>Aracın asil ve yedek anahtarları</li>
              <li>Fatura</li>
              <li>Ödeme yapılacak banka adı, şube ve IBAN</li>
            </ul>
          </div>

          {/* Diğer step-box'lar burada devam eder */}
        </div>
      </div>
    </div>
  );
};

export default HasarAninda;
