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
            pattern="\d{11}"
            maxLength="11"
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
          <label className="form-label">Doğum Tarihi</label>
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
          fullContent="Tamamlayıcı Sağlık Sigortası, SGK kapsamındaki bireylerin özel hastanelerde ek ücret ödemeden sağlık hizmeti alabilmelerini sağlar. SGK anlaşmalı özel hastanelerde muayene olduğunuzda devlet bir kısmını öder, ancak geri kalan 'fark ücreti' hastaya aittir. TSS, bu farkı karşılar. Böylece hasta, kaliteli sağlık hizmetinden ek ücret ödemeden yararlanabilir. TSS ile hem bütçenizi korursunuz hem de daha hızlı ve konforlu bir tedavi süreci geçirirsiniz. Özellikle yoğun kamu hastanelerinden kaçınmak isteyenler için ideal bir çözümdür."
        />

        <BilgiCard
          title="TSS ile Nelerden Tasarruf Edilir?"
          image={ts2}
          summary="Yüksek muayene, tetkik ve ameliyat ücretlerinden korunursunuz."
          fullContent="Tamamlayıcı Sağlık Sigortası sayesinde özellikle özel hastanelerde karşılaşabileceğiniz yüksek maliyetlerden korunursunuz. Sadece muayene ücretleri değil, tahlil, röntgen, MR, tomografi gibi görüntüleme hizmetleri de poliçeye dahil olabilir. Yatış gereken durumlarda ameliyat, yoğun bakım, refakatçi hizmetleri gibi giderlerin büyük bir kısmı da karşılanır. Bu sigorta türü, beklenmeyen sağlık masraflarını minimuma indirerek hem sağlık güvencesi hem de maddi huzur sunar."
        />

        <BilgiCard
          title="TSS’yi Kimler Alabilir?"
          image={ts3}
          summary="SGK'lı herkes bireysel ya da aile planı ile sigorta yaptırabilir."
          fullContent="Tamamlayıcı Sağlık Sigortası, SGK’ya bağlı olan 18–65 yaş arasındaki tüm bireyler için uygundur. İster bireysel ister aile planı şeklinde düzenlenebilir. Anne-baba ile birlikte çocuklar da (0-18 yaş arası) poliçeye dahil edilebilir. Bazı sigorta şirketleri geniş yaş aralıkları sunarak daha fazla kişiye ulaşmayı hedeflemektedir. Hamilelik planlayan bireyler için özel teminatlı planlar da mevcuttur. Böylece hem sizin hem de ailenizin sağlığı güvence altına alınır."
        />

        <BilgiCard
          title="Acil Durumlar ve Yatışlar Kapsamda mı?"
          image={ts4}
          summary="Evet, hastane yatışları ve acil müdahaleler genellikle kapsama dahildir."
          fullContent="Birçok tamamlayıcı sağlık sigortası poliçesi, acil servis hizmetlerinden yatarak tedaviye kadar geniş bir kapsam sunar. Örneğin trafik kazası, ani hastalıklar veya ciddi yaralanmalar gibi durumlarda acil müdahale teminatı devreye girer. Yatarak tedavilerde ise ameliyat, yoğun bakım, refakatçi hizmetleri, anestezi ve hemşirelik hizmetleri gibi detaylar poliçe kapsamında karşılanır. Bu da ciddi sağlık sorunlarında yüksek fatura riskini ortadan kaldırarak bireylere güvenli bir çözüm sunar."
        />
      </div>
        <SigortaButtonsFiltered />
      
    </div>
  );
};

export default TamamlayiciSaglik;
