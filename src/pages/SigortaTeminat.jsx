import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SigortaTeminat.css";

const SigortaTeminat = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="teminat-container">
      <div className="teminat-left-panel">
        <aside className="teminat-sidebar">
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
            href="/src/files/kaza-tespit-tutanağı.pdf"
            download
            className="pdf-indir-link"
          >
            PDF Dökümanı İndir
          </a>
        </div>
      </div>

      <div className="teminat-content">
        <h1>Teminatlar</h1>

        <h3>Kasko ile Trafik Sigortası Arasındaki Fark Nedir?</h3>
        <p>
          Kasko sigortası, kendi aracınızda oluşabilecek maddi zararları teminat
          altına alırken; trafik sigortası ise, üçüncü şahıslara vereceğiniz
          maddi ve bedeni zararları karşılamak amacıyla zorunlu olarak
          yaptırılan bir sigorta türüdür.
        </p>
        <p>
          Trafik sigortası kendi aracınızdaki hasarı karşılamaz, bu tür durumlar
          için kasko sigortası gereklidir. Kasko poliçeleri genellikle ihtiyari
          mali sorumluluk, ferdi kaza ve çeşitli destek teminatlarını da
          içerebilir.
        </p>
        <p>
          Örneğin; trafik sigortası bir kazada karşı tarafa verilen zararları
          belirli bir limite kadar karşılar. Bu limitin yetersiz kaldığı
          durumlarda, kaskoya eklenen İhtiyari Mali Sorumluluk teminatı devreye
          girerek kalan tutarı öder.
        </p>

        <h3>Kasko Sigortasının Genel Şartları Nelerdir?</h3>
        <p>
          Kasko poliçeleri; İhtiyari Mali Sorumluluk, Ferdi Kaza, Hukuksal
          Koruma gibi teminatları içerebilir. Bu teminatlara ait genel şartlara
          aşağıdaki bağlantılardan ulaşabilirsiniz:
        </p>
        <ul>
          <li>
            <a
              href="/src/files/KaskoGenel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kara Araçları Kasko Sigortası Genel Şartları
            </a>
          </li>
          <li>
            <a
              href="/src/files/Imm.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Motorlu Kara Taşıtları İhtiyari Mali Sorumluluk Sigortası Genel
              Şartları
            </a>
          </li>
          <li>
            <a
              href="/src/files/HukuksalKoruma.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hukuksal Koruma Sigortası Genel Şartları
            </a>
          </li>
          <li>
            <a
              href="/src/files/FerdiKazaGenel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ferdi Kaza Sigortası Genel Şartları
            </a>
          </li>
        </ul>

        <h3>Kasko Ürünleri Teminatlarına Göre Nasıl Sınıflandırılır?</h3>
        <p>
          <strong>Dar Kasko:</strong> Teminat kapsamı sınırlıdır. Belirli
          riskler için geçerlidir.
        </p>
        <p>
          <strong>Standart Kasko:</strong> Teminat gruplarının tamamını kapsar.
        </p>
        <p>
          <strong>Genişletilmiş Kasko:</strong> Ana teminatların yanı sıra ek
          sözleşmeyle bazı riskleri de teminat altına alır.
        </p>
        <p>
          <strong>Tam Kasko:</strong> Tüm teminatlar ve ek sözleşme ile
          sağlanabilecek her türlü riski kapsar.
        </p>

        <h3>Muafiyetli Kasko Ne Demektir?</h3>
        <p>
          Muafiyetli kasko, hasarın belirli bir miktarını sigortalının
          kendisinin karşılaması anlamına gelir. Poliçede bu oran ya da tutar
          açıkça belirtilir ve poliçeye 14 punto büyüklüğünde yazılır.
        </p>

        <h3>Kullanım Kaybı veya Gelir Kaybı Teminatı Var mı?</h3>
        <p>
          Kasko teminatına dahil olan bir hasar sonrası (çalınma hariç), tamir
          süresi boyunca oluşacak ulaşım masrafları veya iş durması zararları
          bazı poliçelerde ek teminatla karşılanabilir.
        </p>
      </div>
    </div>
  );
};

export default SigortaTeminat;
