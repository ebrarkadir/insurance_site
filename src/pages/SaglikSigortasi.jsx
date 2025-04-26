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

const SaglikSigortasi = () => {
  const [tc, setTc] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [telefon, setTelefon] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Sağlık Sigortası</h1>

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
            value="Yeni Sağlık Sigortası Başvurusu"
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
            Bu formdan ilettiğiniz bilgiler sadece sağlık sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Teklif Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya daha detaylı bilgi
            gerektiğinde, verdiğiniz telefon numarası üzerinden sizinle
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

      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "Sağlık Sigortası Nedir?",
            content:
              "Sağlık sigortası, hastalık veya kaza durumunda oluşabilecek tedavi masraflarını güvence altına alan bir sigorta türüdür.",
          },
          {
            title: "Kimler Sağlık Sigortası Yaptırabilir?",
            content:
              "Her yaş grubundaki bireyler sağlık sigortası yaptırabilir. Bireysel ya da aile planları ile poliçe kapsamı genişletilebilir.",
          },
          {
            title: "Hangi Hizmetleri Kapsar?",
            content:
              "Ayakta ve yatarak tedavi, rutin muayene, tahlil, ameliyat, hastane hizmetleri gibi geniş bir yelpazede sağlık hizmeti sunar.",
          },
          {
            title: "Sağlık Sigortası Zorunlu mu?",
            content:
              "Hayır, isteğe bağlıdır. Ancak beklenmedik sağlık giderlerine karşı büyük bir finansal koruma sağlar.",
          },
        ]}
      />

      <AnlasmaliSirketler />

      <h2 className="rehber">Sağlık Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Neden Sağlık Sigortası?"
          image={ts1}
          summary="Beklenmedik sağlık giderlerinden korunun."
          fullContent="Sağlık sigortası, hayatın beklenmedik anlarında ortaya çıkan yüksek tedavi masraflarını karşılamak için önemli bir güvence sağlar. Hastalık, kaza, ameliyat, yoğun bakım gibi durumlarda oluşabilecek büyük mali yükleri azaltır. Özel hastanelerde hızlı hizmet alabilmenizi, doktor seçme özgürlüğü kazanmanızı ve uzun bekleme sürelerinden kaçınmanızı sağlar. Bu sayede hem sağlığınız hem de bütçeniz korunmuş olur. Günümüz sağlık maliyetlerinin yükseldiği ortamda, sağlık sigortası büyük bir avantaj sunar."
        />

        <BilgiCard
          title="Hangi Hizmetler Sigortaya Dahil?"
          image={ts2}
          summary="Muayene, tedavi, ilaç ve hastane hizmetleri."
          fullContent="Sağlık sigortası kapsamı oldukça geniştir. Ayakta tedaviler (muayene, tetkik, görüntüleme işlemleri), yatarak tedaviler (ameliyatlar, hastane yatışları), ilaç giderleri, doğum paketleri, yoğun bakım hizmetleri ve acil müdahale masrafları gibi birçok hizmet poliçe kapsamında karşılanabilir. Ayrıca bazı sigorta paketlerinde fizik tedavi, diş tedavisi ve psikolojik destek gibi ek sağlık hizmetleri de sunulmaktadır. Poliçe seçeneklerine göre hizmet kapsamı kişiselleştirilebilir."
        />

        <BilgiCard
          title="Kimler Faydalanabilir?"
          image={ts3}
          summary="Bireyler ve aileler için esnek planlar."
          fullContent="Sağlık sigortası, bireysel olarak 18 yaşından büyük herkes için düzenlenebileceği gibi aile planlarıyla da tercih edilebilir. Çocuklar, eş ve diğer aile bireyleri aynı poliçe kapsamında sigortalanabilir. Bebekler için doğumdan kısa bir süre sonra poliçe başlatılabilir. Sağlık sigortası, hem genç yaşta hem de ileri yaşlarda yapılabilecek bir yatırımdır. Esnek yaş aralığı ve farklı prim seçenekleri ile herkesin ihtiyacına ve bütçesine uygun çözümler sunar."
        />

        <BilgiCard
          title="Sağlık Sigortası Avantajları Neler?"
          image={ts4}
          summary="Hızlı erişim, kaliteli hastaneler, ekonomik çözümler."
          fullContent="Sağlık sigortası sahipleri, anlaşmalı özel hastanelerde sıra beklemeden doktor hizmeti alabilir, hızlı teşhis ve tedavi süreçlerinden yararlanır. Acil durumlarda özel hastanelerde yüksek kalitede sağlık hizmetine kolay erişim sağlar. Ayrıca, yüksek tedavi maliyetlerine karşı bütçenizi korur, öngörülemeyen sağlık harcamalarını sigorta teminatı altına alarak maddi stres yaşamadan tedavi sürecine odaklanmanıza imkan verir. Sağlık sigortası ile sağlık hizmetlerinde özgür ve güvenli bir deneyim yaşarsınız."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default SaglikSigortasi;
