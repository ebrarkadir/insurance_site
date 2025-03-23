import "./Footer.css";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Üst Bilgi Alanı */}
      <div className="footer-top">
        {/* Masaüstü Menü */}
        <div className="footer-col desktop-only">
          <h3>Çetin Sigorta</h3>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>Sigorta</h3>
          <ul>
            <li>Zorunlu Trafik Sigortası</li>
            <li>Kasko Sigortası</li>
            <li>DASK Sigortası</li>
            <li>Tamamlayıcı Sağlık Sigortası</li>
            <li>Seyahat Sağlık Sigortası</li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>İletişim</h3>
          <ul>
            <li>İletişim Bilgileri</li>
            <li>Konum</li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>Yardım Alın</h3>
          <ul>
            <li>Bize Ulaşın</li>
          </ul>
        </div>

        {/* Mobil Accordion Menü */}
        <div className="footer-accordion mobile-only">
          <details>
            <summary>Çetin Sigorta</summary>
            <ul>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
            </ul>
          </details>

          <details>
            <summary>Sigorta</summary>
            <ul>
              <li>Zorunlu Trafik Sigortası</li>
              <li>Kasko Sigortası</li>
              <li>DASK Sigortası</li>
              <li>Tamamlayıcı Sağlık Sigortası</li>
              <li>Seyahat Sağlık Sigortası</li>
            </ul>
          </details>

          <details>
            <summary>İletişim</summary>
            <ul>
              <li>İletişim Bilgileri</li>
              <li>Konum</li>
            </ul>
          </details>

          <details>
            <summary>Yardım Alın</summary>
            <ul>
              <li>Bize Ulaşın</li>
            </ul>
          </details>
        </div>
      </div>

      {/* Orta Alan */}
      <div className="footer-middle">
        <div className="footer-middle-left">
          <div className="footer-logo-title">
            <img src={logo} alt="logo" className="footer-logo-large" />
            <span>Çetin Sigorta</span>
          </div>
          <p>Adres: Mecidiye Mahallesi Milli Birlik Caddesi</p>
          <p>Tüplek Apartmanı No:102/B </p>
          <p>Afyonkarahisar / Merkez</p>
          <p>
            E-posta:{" "}
            <a href="mailto:info@cetinsigorta.com">info@cetinsigorta.com</a>
          </p>
          <p>Çetin Sigorta, Finansal karşılaştırma platformudur.</p>
        </div>

        <div className="footer-middle-right">
          <h2>
            <FaPhoneAlt style={{ color: "grey" }} /> 0272 214 76 96
          </h2>
          <p>Sorularınız için numaramızdan bize ulaşarak destek alabilirsiniz.</p>
          <p>
            Çetin Sigorta Müşteri Hizmetleri hafta içi 09:30 - 19:30 arası
            hizmetinizdedir.
          </p>
          <p>Çalışma saatleri dışında WhatsApp aracılığı ile ulaşabilirsiniz.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Tüm hakları saklıdır. © 2025</p>
        <p className="footer-designer">
           Bu site, Ebrar Kadir Çetin tarafından Çetin Sigorta için geliştirilmiştir.
        </p>
</div>

    </footer>
  );
};

export default Footer;
