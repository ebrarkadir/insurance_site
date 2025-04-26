import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import BilgiCard from "../components/BilgiCard";
import fk1 from "../assets/blog/fk1.jpg";
import fk2 from "../assets/blog/fk2.jpg";
import fk3 from "../assets/blog/fk3.jpg";
import fk4 from "../assets/blog/fk4.jpg";

const FerdiKaza = () => {
  const [tc, setTc] = useState("");
  const [adSoyad, setAdSoyad] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [meslek, setMeslek] = useState("");
  const [telefon, setTelefon] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  // Bugünün tarihi (ileri tarihi engellemek için)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Ferdi Kaza Sigortası</h1>

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
            value="Yeni Ferdi Kaza Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="tc_kimlik"
            placeholder="T.C. Kimlik No"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            pattern="\d{11}"
            maxLength="11"
            required
          />

          <input
            type="text"
            name="ad_soyad"
            placeholder="Adınız Soyadınız"
            value={adSoyad}
            onChange={(e) => setAdSoyad(e.target.value)}
            required
          />

          <input
            type="date"
            name="dogum_tarihi"
            max={today} // ileri tarih seçilemez ✅
            value={dogumTarihi}
            onChange={(e) => setDogumTarihi(e.target.value)}
            required
          />

          <input
            type="text"
            name="meslek"
            placeholder="Mesleğiniz"
            value={meslek}
            onChange={(e) => setMeslek(e.target.value)}
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

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece ferdi kaza sigortası teklifi
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

      {/* Ferdi Kaza Bilgi Kartları */}
      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "Ferdi Kaza Sigortası Nedir?",
            content:
              "Beklenmedik kazalarda hayatınızı ve maddi geleceğinizi koruma altına alan sigorta türüdür.",
          },
          {
            title: "Neleri Kapsar?",
            content:
              "Kaza sonucu ölüm, kalıcı sakatlık, tedavi masrafları, geçici iş göremezlik gibi riskleri teminat altına alır.",
          },
          {
            title: "Kimler Yaptırabilir?",
            content:
              "18-65 yaş arası herkes bireysel veya aile paketi kapsamında ferdi kaza sigortası yaptırabilir.",
          },
          {
            title: "Sigorta Süreci Nasıl İşliyor?",
            content:
              "Formu doldurduktan sonra teklif oluşturulur, onayınızla birlikte poliçeniz anında aktif hale gelir.",
          },
        ]}
      />

      <AnlasmaliSirketler />

      <h2 className="rehber">Ferdi Kaza Sigortası Rehberi</h2>

      <div className="bilgi-card-grid">
        <BilgiCard
          title="Ferdi Kaza Sigortası Size Ne Sağlar?"
          image={fk1}
          summary="Kaza sonrası oluşabilecek maddi kayıpları önler."
          fullContent="Ferdi Kaza Sigortası; trafik kazası, iş kazası, ev kazası gibi beklenmedik olaylar sonucu oluşabilecek gelir kayıplarını önlemeyi amaçlar. Sigorta, beklenmedik kaza sonucu oluşabilecek hastane masraflarını karşılar, sakatlık halinde bireyin maddi güvencesini sağlar veya ölüm halinde yakınlarına finansal destek sunar. Bu sigorta türü, özellikle günlük hayatta aktif olan bireylerin ve çalışan kişilerin hayat kalitesini korumaya yönelik önemli bir güvence sağlar. Ayrıca, poliçe kapsamına göre geçici iş göremezlik durumlarında da ödeme yapılabilir."
        />

        <BilgiCard
          title="Teminatlar Neler?"
          image={fk2}
          summary="Vefat, sakatlık ve tedavi masrafları gibi teminatlar sunar."
          fullContent="Ferdi Kaza Sigortası poliçeleri, birçok farklı riski kapsayacak şekilde genişletilebilir. Ana teminatlar arasında kaza sonucu vefat, kalıcı sakatlık, geçici iş göremezlik ve hastane yatış masrafları bulunur. Ek teminatlar ile kaza sonucu tedavi giderleri, acil yardım hizmetleri ve gündelik hastane tazminatları da poliçeye eklenebilir. Bazı poliçeler ambulans hizmetleri, yurtdışı seyahatlerde acil müdahale gibi avantajlar da sunmaktadır. Teminat limitleri ve detayları seçilecek sigorta şirketine ve bireysel ihtiyaca göre belirlenir."
        />

        <BilgiCard
          title="Neden Yaptırmalıyım?"
          image={fk3}
          summary="Beklenmeyen kazalara karşı finansal güvenlik sağlar."
          fullContent="Hayat, her zaman öngörülebilir değildir. Evde, işte, yolda veya tatilde karşılaşılabilecek kazalar sonucu ortaya çıkan sağlık problemleri ya da gelir kaybı ciddi ekonomik zorluklara yol açabilir. Ferdi Kaza Sigortası, bu tür beklenmedik durumlarda bireyin ve ailesinin ekonomik düzeninin korunmasını sağlar. Özellikle aktif çalışan bireyler, sık seyahat edenler, tehlikeli işlerde görev yapanlar için Ferdi Kaza Sigortası hayati önem taşır. Ayrıca, sigorta primleri oldukça ekonomik olup, sağladığı maddi ve manevi güvence çok büyük bir avantaj sağlar."
        />

        <BilgiCard
          title="Sigorta Süreci Nasıl İşliyor?"
          image={fk4}
          summary="Başvuru ve poliçe düzenlemesi hızlı ve kolaydır."
          fullContent="Ferdi Kaza Sigortası başvuru süreci oldukça basittir. Sigortalı adayı temel bilgilerini (kimlik, doğum tarihi, meslek vb.) içeren kısa bir form doldurur. İhtiyaca ve tercihlere göre teminatlar belirlenir ve kişiye özel bir teklif sunulur. Onay verildiği anda poliçe düzenlenir ve hemen geçerlilik kazanır. Sigorta süresince teminatlar geçerlidir ve poliçede belirtilen şartlara uygun bir kaza meydana geldiğinde, sigortalı ya da yakınları hızlı bir şekilde tazminat talebinde bulunabilir. Süreç boyunca müşteri temsilcileri tüm aşamalarda destek sağlar."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default FerdiKaza;
