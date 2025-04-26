import React, { useState } from "react";
import Select from "react-select";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import BilgiCard from "../components/BilgiCard";
import ks1 from "../assets/blog/ks1.jpg";
import ks2 from "../assets/blog/ks2.jpg";
import ks3 from "../assets/blog/ks3.jpg";
import ks4 from "../assets/blog/ks4.jpg";

const KonutSigortasi = () => {
  const [isimSoyisim, setIsimSoyisim] = useState("");
  const [telefon, setTelefon] = useState("");
  const [adres, setAdres] = useState("");
  const [metrekare, setMetrekare] = useState("");
  const [binaYili, setBinaYili] = useState(null);
  const [esyaBedeli, setEsyaBedeli] = useState("");
  const [depremTeminati, setDepremTeminati] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => ({
    value: currentYear - i,
    label: (currentYear - i).toString(),
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderRadius: "6px",
      padding: "2px",
      fontSize: "1rem",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#003087" : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#e6f0ff",
      },
    }),
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Konut Sigortası</h1>

      <div className="form-container">
        <form
          action="https://formsubmit.co/cetinebrarkadir@gmail.com"
          method="POST"
          target="hidden_iframe"
          className="trafik-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Yeni Konut Sigortası Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="isim_soyisim"
            placeholder="Adınız Soyadınız"
            value={isimSoyisim}
            onChange={(e) => setIsimSoyisim(e.target.value)}
            required
          />

          <div className="telefon-wrapper">
            <div className="telefon-input-group">
              <span className="telefon-prefix">+90</span>
              <input
                type="tel"
                name="telefon"
                placeholder="5XXXXXXXXX"
                value={telefon}
                onChange={(e) =>
                  setTelefon(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                pattern="5\d{9}"
                maxLength="10"
                required
                className="telefon-input"
              />
            </div>
          </div>

          <input
            type="text"
            name="adres"
            placeholder="Açık Adres"
            value={adres}
            onChange={(e) => setAdres(e.target.value)}
            required
          />

          <input
            type="number"
            name="metrekare"
            placeholder="Evin Alanı (m²)"
            value={metrekare}
            onChange={(e) => setMetrekare(e.target.value)}
            min="1"
            required
          />

          <Select
            styles={customStyles}
            options={years}
            placeholder="Bina İnşa Yılı Seçiniz"
            value={binaYili}
            onChange={(selectedOption) => setBinaYili(selectedOption)}
            name="bina_yili"
          />

          <input
            type="number"
            name="esya_bedeli"
            placeholder="Eşya Bedeli (₺)"
            value={esyaBedeli}
            onChange={(e) => setEsyaBedeli(e.target.value)}
            required
          />

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="depremTeminati"
              checked={depremTeminati}
              onChange={(e) => setDepremTeminati(e.target.checked)}
            />
            <label htmlFor="depremTeminati">Deprem Teminatı İstiyorum</label>

            {/* Gizli input */}
            <input
              type="hidden"
              name="deprem_teminatı"
              value={depremTeminati ? "İstiyor" : "İstemiyor"}
            />
          </div>

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece konut sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Teklif Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya detaylı bilgi gerektiğinde
            verdiğiniz telefon numarası üzerinden sizinle iletişime geçilebilir.
          </p>

          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-icon">✔</div>
            <h2 className="popup-title">Talebiniz Alındı</h2>
            <p className="popup-message">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button onClick={closePopup} className="popup-close-btn">
              Kapat
            </button>
          </div>
        </div>
      )}

      <Adimlar />

      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "Konut Sigortası Nedir?",
            content:
              "Evinizi ve içindeki değerli eşyalarınızı yangın, hırsızlık, deprem gibi risklere karşı güvence altına alan sigortadır.",
          },
          {
            title: "Konut Sigortası Teminatları Nelerdir?",
            content:
              "Yangın, deprem, hırsızlık, su baskını, fırtına, yer kayması gibi birçok olayı kapsar. İsteğe bağlı ek teminatlar da eklenebilir.",
          },
          {
            title: "Konut Sigortası Zorunlu mudur?",
            content:
              "Hayır, isteğe bağlıdır. Ancak özellikle deprem riski yüksek bölgelerde mutlaka tavsiye edilir.",
          },
          {
            title: "Neden Konut Sigortası Yaptırmalıyım?",
            content:
              "Beklenmeyen felaketlere karşı evinizi ve eşyalarınızı koruma altına alır, maddi kayıpların önüne geçer.",
          },
        ]}
      />

      <AnlasmaliSirketler />

      <h2 className="rehber">Konut Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Evinizi Yangın ve Hırsızlığa Karşı Koruyun"
          image={ks1}
          summary="Konut sigortası yangın, hırsızlık gibi risklere karşı finansal güvence sağlar."
          fullContent="Yangın, yıldırım düşmesi, infilak gibi beklenmeyen durumlar sonucu evinizde oluşabilecek maddi zararları karşılamak için konut sigortası devreye girer. Ayrıca evinize yönelik hırsızlık olaylarında oluşacak maddi kayıplar da poliçe kapsamında telafi edilir. Böylece ani gelişen olumsuzluklara karşı evinizi ve değerli eşyalarınızı koruma altına almış olursunuz."
        />

        <BilgiCard
          title="Deprem ve Doğal Afetlere Karşı Güvendesiniz"
          image={ks2}
          summary="Deprem teminatı ile evinizi olası zararlar karşısında koruma altına alın."
          fullContent="Türkiye gibi deprem riski yüksek ülkelerde konut sigortası kapsamında deprem, yer kayması, tsunami ve yanardağ patlaması gibi doğal afetlere karşı maddi güvence sunulmaktadır. Ana yapıda ve bağlı tesisatlarda meydana gelen zararlar, ek teminatlar ile eşyalar da koruma altına alınabilir. Bu sayede eviniz doğal afetler karşısında büyük ölçüde teminat altında olur."
        />

        <BilgiCard
          title="Eşyalarınızı da Sigortalayın"
          image={ks3}
          summary="Evinizdeki değerli eşyalar için de güvence sunar."
          fullContent="Konut sigortası sadece binayı değil, evde bulunan tüm taşınabilir eşyaları da kapsayacak şekilde düzenlenebilir. Mobilyalar, beyaz eşyalar, elektronik cihazlar, kıymetli sanat eserleri ve mücevherler gibi eşyalar, hırsızlık, yangın, su baskını gibi risklere karşı poliçeye dahil edilerek güvence altına alınır. Bu sayede olası bir hasar durumunda yalnızca yapınız değil, yaşam alanınızdaki değerli eşyalarınız da korunmuş olur."
        />

        <BilgiCard
          title="Uygun Fiyatlarla Geniş Teminat"
          image={ks4}
          summary="Bütçenize uygun farklı planlarla maksimum koruma elde edin."
          fullContent="Konut sigortası, farklı ihtiyaç ve bütçelere hitap eden poliçe seçenekleri ile esneklik sunar. İsterseniz sadece yangın teminatlı, isterseniz kapsamlı (yangın, doğal afet, hırsızlık, su baskını, cam kırılması vb.) paketler tercih edebilirsiniz. Üstelik taksitli ödeme imkanlarıyla, küçük bütçelerle büyük risklere karşı etkin koruma sağlama şansınız olur. Böylece hem evinizi hem de ailenizin geleceğini güvence altına alabilirsiniz."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default KonutSigortasi;
