import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import HasarsizlikTablosu from "../components/HasarsizlikTablosu";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import BilgiCard from "../components/BilgiCard";
import cezaResmi from "../assets/blog/ceza.jpg";
import esdegerResmi from "../assets/blog/esdeger.jpg";
import kacgunResmi from "../assets/blog/kacgun.jpg";
import yenilemeResmi from "../assets/blog/yenileme.jpg";

const KaskoSigortasi = () => {
  const [tip, setTip] = useState("bireysel");
  const [tcKimlik, setTcKimlik] = useState("");
  const [vergiNo, setVergiNo] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [plakaYok, setPlakaYok] = useState(false);
  const [plaka, setPlaka] = useState("");
  const [telefon, setTelefon] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Kasko Sigortası</h1>

      <div className="form-container">
        <div className="tab-buttons">
          <button
            className={tip === "bireysel" ? "active" : ""}
            onClick={() => setTip("bireysel")}
            type="button"
          >
            Bireysel
          </button>
          <button
            className={tip === "kurumsal" ? "active" : ""}
            onClick={() => setTip("kurumsal")}
            type="button"
          >
            Kurumsal
          </button>
        </div>

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
            value="Yeni Kasko Sigortası Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="plaka"
            placeholder="Plaka"
            value={plaka}
            onChange={(e) => setPlaka(e.target.value)}
            disabled={plakaYok}
            required={!plakaYok}
          />

          <div className="checkbox-altinda">
            <input
              type="checkbox"
              id="plakaYok"
              checked={plakaYok}
              onChange={() => setPlakaYok(!plakaYok)}
            />
            <label htmlFor="plakaYok">Plakam Yok</label>
          </div>

          {tip === "bireysel" && (
            <>
              <input
                type="text"
                name="tc_kimlik"
                placeholder="T.C. Kimlik No"
                value={tcKimlik}
                onChange={(e) => setTcKimlik(e.target.value)}
                pattern="\d{12}"
                maxLength="12"
                minLength="12"
                required
              />
              <input
                type="date"
                name="dogum_tarihi"
                value={dogumTarihi}
                onChange={(e) => setDogumTarihi(e.target.value)}
                required
              />
            </>
          )}

          {tip === "kurumsal" && (
            <input
              type="text"
              name="vergi_no"
              placeholder="Vergi No"
              value={vergiNo}
              onChange={(e) => setVergiNo(e.target.value)}
              pattern="\d{11}"
              maxLength="11"
              minLength="11"
              required
            />
          )}

          <div className="telefon-wrapper">
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

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece kasko sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Kasko Sigortası Teklifi Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya daha detaylı bilgi
            durumunda, verdiğiniz cep telefonu numarası üzerinden sizinle
            iletişime geçilebilir.
          </p>

          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}
          ></iframe>
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
      <HasarsizlikTablosu />
      <AnlasmaliSirketler />
      <h2 className="rehber">Kasko Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Kasko Sigortası Yaptırmamanın Sonuçları"
          image={cezaResmi}
          summary="Kasko yaptırmamak maddi kayıplara neden olabilir. Detaylar için tıklayın."
          fullContent="Kasko sigortası yaptırmadığınızda, aracınızda meydana gelen hasarları kendi cebinizden karşılamak zorunda kalırsınız..."
        />
        <BilgiCard
          title="Orijinal ve Eşdeğer Parça Kullanımı"
          image={esdegerResmi}
          summary="Tamirlerde kullanılan parçalar önemlidir. Orijinal mi eşdeğer mi?"
          fullContent="Kasko tamir süreçlerinde kullanılan parçalar orijinal ya da eşdeğer olabilir. Bu tercihler poliçeye göre değişir..."
        />
        <BilgiCard
          title="Kasko Ne Zaman Başlatılmalı?"
          image={kacgunResmi}
          summary="Aracı satın aldığınızda kasko hemen yapılmalı mı?"
          fullContent="Kasko sigortası poliçenizin aktif olacağı tarih önemlidir. Aracı teslim alır almaz başlatmak, muhtemel riskleri önler..."
        />
        <BilgiCard
          title="Kasko Poliçesi Ne Zaman Yenilenmeli?"
          image={yenilemeResmi}
          summary="Poliçenizi vaktinde yenileyin, kesintisiz güvence altında kalın."
          fullContent="Kasko poliçenizi bitiş tarihinden birkaç gün önce yenilemek, yeni poliçenizin kesintisiz devreye girmesini sağlar..."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default KaskoSigortasi;
