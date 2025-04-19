import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import BilgiCard from "../components/BilgiCard";
import ts1 from "../assets/blog/ts1.jpg";
import ts2 from "../assets/blog/ts2.jpg";
import ts3 from "../assets/blog/ts3.jpg";
import ts4 from "../assets/blog/ts4.jpg";

const TamamlayiciSaglik = () => {
  const [tc, setTc] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Tamamlayıcı Sağlık Sigortası</h1>

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
            value="Yeni Tamamlayıcı Sağlık Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="tc_kimlik"
            placeholder="T.C. Kimlik No"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            pattern="\d{12}"
            maxLength="12"
            required
          />

          <input
            type="text"
            name="ad"
            placeholder="Ad"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            required
          />

          <input
            type="text"
            name="soyad"
            placeholder="Soyad"
            value={soyad}
            onChange={(e) => setSoyad(e.target.value)}
            required
          />

          <input
            type="date"
            name="dogum_tarihi"
            value={dogumTarihi}
            onChange={(e) => setDogumTarihi(e.target.value)}
            required
          />

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece tamamlayıcı sağlık sigortası
            teklifi oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir
            şekilde kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Teklif Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya daha detaylı bilgi
            durumunda, verdiğiniz cep telefonu numarası üzerinden sizinle
            iletişime geçilebilir.
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

      {/* Soru-Cevap Kutuları */}
      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "Tamamlayıcı Sağlık Sigortası Nedir?",
            content:
              "SGK güvencesi olan bireylerin özel hastanelerde fark ücreti ödemeden sağlık hizmeti almasını sağlayan isteğe bağlı bir sigortadır.",
          },
          {
            title: "TSS Kimler İçin Uygundur?",
            content:
              "18-65 yaş arası, SGK’lı olan tüm bireyler bu sigortadan faydalanabilir. Aile bireyleri de eklenebilir.",
          },
          {
            title: "Hangi Hizmetleri Kapsar?",
            content:
              "Ayakta ve yatarak tedavi, muayene, tahlil, röntgen, ameliyat, fizik tedavi gibi birçok sağlık hizmeti tamamlayıcı olarak karşılanır.",
          },
          {
            title: "TSS Zorunlu mudur?",
            content:
              "Hayır, isteğe bağlıdır. Ancak SGK kapsamının yetersiz kaldığı yerlerde maddi yükü hafifletir.",
          },
        ]}
      />
       <AnlasmaliSirketler />

      {/* Görselli Bilgi Kartları */}
      <h2 className="rehber">Tamamlayıcı Sağlık Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Tamamlayıcı Sağlık Sigortası Neden Tercih Edilmeli?"
          image={ts1}
          summary="Özel hastanelerde SGK fark ücretlerini ödemeden tedavi olun."
          fullContent="SGK’nın anlaşmalı olduğu özel hastanelerde tedavi olunduğunda, SGK belirli bir kısmını öder; kalan farkı hasta öder. Tamamlayıcı Sağlık Sigortası bu fark ücretlerini karşılayarak size ek maliyet çıkarmadan sağlık hizmeti almanızı sağlar."
        />
        <BilgiCard
          title="TSS ile Nelerden Tasarruf Edilir?"
          image={ts2}
          summary="Yüksek muayene, tetkik ve ameliyat ücretlerinden korunursunuz."
          fullContent="Özellikle büyük şehirlerde özel hastanelerdeki ücretler oldukça yüksektir. TSS, bu fark ücretlerini üstlenerek sizi ekonomik anlamda güvence altına alır. Muayene, tahlil, röntgen, MR gibi birçok hizmet ücretsiz olur."
        />
        <BilgiCard
          title="TSS’yi Kimler Alabilir?"
          image={ts3}
          summary="SGK'lı herkes bireysel ya da aile planı ile sigorta yaptırabilir."
          fullContent="18 yaş üstü SGK’lı bireyler bireysel olarak, aile bireyleriyle birlikte ise toplu olarak tamamlayıcı sağlık sigortası yaptırabilir. Çocuklar 0-18 yaş aralığında ebeveyn ile birlikte sigortalanabilir."
        />
        <BilgiCard
          title="Acil Durumlar ve Yatışlar Kapsamda mı?"
          image={ts4}
          summary="Evet, hastane yatışları ve acil müdahaleler genellikle kapsama dahildir."
          fullContent="Tamamlayıcı sağlık sigortası çoğu poliçede yatarak tedavileri ve acil müdahaleleri kapsar. Yoğun bakım, ameliyat, anestezi gibi durumlar da bu teminatlar içinde yer alır."
        />
      </div>

     
      <SigortaButtonsFiltered />
    </div>
  );
};

export default TamamlayiciSaglik;
