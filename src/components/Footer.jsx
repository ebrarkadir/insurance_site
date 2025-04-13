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
            <li>
              <a href="/sirket-bilgileri">Şirket Bilgileri</a>
            </li>
            <li>
              <a href="/ekibimiz">Ekibimiz</a>
            </li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>Sigorta</h3>
          <ul>
            <li>
              <a href="/trafik-sigortasi">Zorunlu Trafik Sigortası</a>
            </li>
            <li>
              <a href="/kasko">Kasko Sigortası</a>
            </li>
            <li>
              <a href="/dask">DASK Sigortası</a>
            </li>
            <li>
              <a href="/tamamlayici-saglik">Tamamlayıcı Sağlık Sigortası</a>
            </li>
            <li>
              <a href="/seyahat-saglik">Seyahat Sağlık Sigortası</a>
            </li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>İletişim</h3>
          <ul>
            <li>
              <a href="/iletisim">İletişim Bilgileri</a>
            </li>
            <li>
              <a href="/konum">Konum</a>
            </li>
          </ul>
        </div>

        <div className="footer-col desktop-only">
          <h3>Yardım Alın</h3>
          <ul>
            <li>
              <a href="/bize-ulasin">Bize Ulaşın</a>
            </li>
            <li>
              <a href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</a>
            </li>
            <li>
              <a href="/hasar-aninda">Hasar Anında</a>
            </li>
            <li>
              <a href="/sigorta-teminatlari">Sigorta Teminatları</a>
            </li>
          </ul>
        </div>

        {/* Mobil Accordion Menü */}
        <div className="footer-accordion mobile-only">
          <details>
            <summary>Çetin Sigorta</summary>
            <ul>
              <li>
                <a href="/sirket-bilgileri">Şirket Bilgileri</a>
              </li>
              <li>
                <a href="/ekibimiz">Ekibimiz</a>
              </li>
            </ul>
          </details>

          <details>
            <summary>Sigorta</summary>
            <ul>
              <li>
                <a href="/trafik-sigortasi">Zorunlu Trafik Sigortası</a>
              </li>
              <li>
                <a href="/kasko">Kasko Sigortası</a>
              </li>
              <li>
                <a href="/dask">DASK Sigortası</a>
              </li>
              <li>
                <a href="/tamamlayici-saglik">Tamamlayıcı Sağlık Sigortası</a>
              </li>
              <li>
                <a href="/seyahat-saglik">Seyahat Sağlık Sigortası</a>
              </li>
            </ul>
          </details>

          <details>
            <summary>İletişim</summary>
            <ul>
              <li>
                <a href="/iletisim">İletişim Bilgileri</a>
              </li>
              <li>
                <a href="/konum">Konum</a>
              </li>
            </ul>
          </details>

          <details>
            <summary>Yardım Alın</summary>
            <ul>
              <li>
                <a href="/bize-ulasin">Bize Ulaşın</a>
              </li>
              <li>
                <a href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="/hasar-aninda">Hasar Anında</a>
              </li>
              <li>
                <a href="/sigorta-teminatlari">Sigorta Teminatları</a>
              </li>
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
          <p>
            Sorularınız için numaramızdan bize ulaşarak destek alabilirsiniz.
          </p>
          <p>
            Çetin Sigorta Müşteri Hizmetleri hafta içi 09:30 - 19:30 arası
            hizmetinizdedir.
          </p>
          <p>
            Çalışma saatleri dışında WhatsApp aracılığı ile ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Çetin Sigorta. Tüm hakları saklıdır.</p>
        <p className="footer-designer">
          Bu site, Ebrar Kadir Çetin tarafından Çetin Sigorta için
          geliştirilmiştir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
