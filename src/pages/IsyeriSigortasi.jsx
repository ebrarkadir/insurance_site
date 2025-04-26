import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import BilgiCard from "../components/BilgiCard";
import is1 from "../assets/blog/is1.jpg";
import is2 from "../assets/blog/is2.jpg";
import is3 from "../assets/blog/is3.jpg";
import is4 from "../assets/blog/is4.jpg";

const IsyeriSigortasi = () => {
  const [firmaAdi, setFirmaAdi] = useState("");
  const [yetkili, setYetkili] = useState("");
  const [telefon, setTelefon] = useState("");
  const [adres, setAdres] = useState("");
  const [sektor, setSektor] = useState("");
  const [metrekare, setMetrekare] = useState("");
  const [yanginDogalAfet, setYanginDogalAfet] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">İşyeri Sigortası</h1>

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
            value="Yeni İşyeri Sigortası Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="firma_adi"
            placeholder="Firma Adı"
            value={firmaAdi}
            onChange={(e) => setFirmaAdi(e.target.value)}
            required
          />

          <input
            type="text"
            name="yetkili_ad_soyad"
            placeholder="Yetkili Adı Soyadı"
            value={yetkili}
            onChange={(e) => setYetkili(e.target.value)}
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
            placeholder="İşyeri Açık Adresi"
            value={adres}
            onChange={(e) => setAdres(e.target.value)}
            required
          />

          <input
            type="text"
            name="faaliyet_alani"
            placeholder="Faaliyet Alanı (Sektör)"
            value={sektor}
            onChange={(e) => setSektor(e.target.value)}
            required
          />

          <input
            type="number"
            name="isyeri_m2"
            placeholder="İşyeri Alanı (m²)"
            value={metrekare}
            onChange={(e) => setMetrekare(e.target.value)}
            min="1"
            required
          />

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="yanginDogalAfet"
              checked={yanginDogalAfet}
              onChange={(e) => setYanginDogalAfet(e.target.checked)}
            />
            <input
              type="hidden"
              name="yangin_dogal_afet"
              value={yanginDogalAfet ? "İstiyor" : "İstemiyor"}
            />
            <label htmlFor="yanginDogalAfet">
              Yangın / Doğal Afet Teminatı İstiyorum
            </label>
          </div>

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece işyeri sigortası teklifi
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

      {/* Bilgi Kutuları */}
      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "İşyeri Sigortası Nedir?",
            content:
              "İşyeri Sigortası, işyerinizi yangın, hırsızlık, doğal afetler, su baskını gibi birçok riske karşı güvence altına alan sigorta türüdür.",
          },
          {
            title: "İşyeri Sigortası Zorunlu mudur?",
            content:
              "Hayır, zorunlu değildir. Ancak olası büyük risklere karşı işletmelerin zarar görmesini önlemek adına tavsiye edilir.",
          },
          {
            title: "İşyeri Sigortası Teminatları Nelerdir?",
            content:
              "Yangın, yıldırım, infilak, su baskını, hırsızlık, cam kırılması, iş durması gibi ana teminatlar sunulur.",
          },
          {
            title: "Neden İşyeri Sigortası Yaptırmalıyım?",
            content:
              "Beklenmeyen felaketlere karşı işletmenizi ve gelir kaynaklarınızı korumak için işyeri sigortası büyük önem taşır.",
          },
        ]}
      />

      <AnlasmaliSirketler />

      <h2 className="rehber">İşyeri Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="İşyeri Sigortası ile Hangi Riskler Güvence Altında?"
          image={is1}
          summary="Yangın, hırsızlık, su baskını, doğal afetler ve işletmenizi tehdit eden birçok risk."
          fullContent="İşyeri Sigortası, yangın, yıldırım, infilak, sel ve su baskını gibi doğa olaylarının yanı sıra, hırsızlık, mala zarar verme, cam kırılması, makinelerde oluşabilecek arızalar gibi birçok riske karşı kapsamlı koruma sağlar. Ayrıca doğal afetlerin (deprem, fırtına, dolu vb.) yol açabileceği maddi zararlar da poliçeye ek teminatlarla dahil edilebilir. Böylece işyerinizin fiziksel varlıkları ve demirbaşlarınız güvence altına alınır."
        />

        <BilgiCard
          title="İşyeri Sigortası Neden Önemlidir?"
          image={is2}
          summary="Beklenmeyen zararlar karşısında işyerinizin devamlılığını koruyun."
          fullContent="İşyeri sigortası, işletmenizi etkileyebilecek beklenmedik riskler karşısında finansal güvence sağlar. Yangın, hırsızlık, deprem, su baskını gibi olaylar hem maddi hem de operasyonel anlamda büyük kayıplara yol açabilir. Böyle durumlarda oluşabilecek tamirat, yeniden yapılanma, iş durması ve müşteri kaybı gibi zararların etkisini azaltır. İşyeri sigortası ile, hem işletmenizin varlıklarını hem de uzun vadede gelirlerinizi güvence altına alırsınız. Ayrıca, olası risklerin finansal etkisini poliçe teminatları dahilinde minimize edersiniz."
        />

        <BilgiCard
          title="Kimler İşyeri Sigortası Yaptırmalı?"
          image={is3}
          summary="Her ölçekteki işletme için ideal güvence: Küçük, orta ve büyük işletmeler."
          fullContent="İşyeri sigortası, sadece büyük şirketler için değil; küçük ve orta ölçekli işletmeler (KOBİ’ler), atölyeler, dükkanlar, restoranlar, kafeler, mağazalar ve ofisler için de hayati önem taşır. İşyerinde müşteri trafiği olan, fiziksel mal/hizmet sunan ya da ekipman kullanan her işletme bu sigortadan faydalanabilir. İşletmenizin büyüklüğüne veya faaliyet alanına bakılmaksızın, bir yangın, su baskını veya başka bir olumsuzluk durumunda ciddi mali yüklerle karşılaşmamak için işyeri sigortası zorunlu olmasa bile mutlaka tercih edilmelidir."
        />

        <BilgiCard
          title="İşyeri Sigortasında Ek Teminatlar Neler?"
          image={is4}
          summary="İsteğe bağlı ek teminatlarla kapsamı genişletin: Makine kırılması, kira kaybı, iş durması."
          fullContent="Standart teminatların dışında, isteğe bağlı ek teminatlar ile poliçenizi genişletebilirsiniz. Örneğin; makine kırılması teminatı ile üretim cihazlarınızı koruyabilirsiniz. İş durması teminatı sayesinde; büyük bir hasar sonrası işletmenizin kapanmasından doğacak gelir kayıplarınız karşılanır. Ayrıca kira kaybı, elektronik cihaz arızaları, üçüncü şahıs mali sorumluluk (müşteri/ziyaretçiye verilen zararlar) gibi birçok farklı riski de poliçenize dahil edebilirsiniz. Böylece hem işletmenizin operasyonel devamlılığı hem de finansal güvenliği sağlanmış olur."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default IsyeriSigortasi;
