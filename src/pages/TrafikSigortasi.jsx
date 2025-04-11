import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import HasarsizlikTablosu from "../components/HasarsizlikTablosu";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";

const TrafikSigortasi = () => {
  const [tip, setTip] = useState("bireysel");
  const [tcKimlik, setTcKimlik] = useState("");
  const [vergiNo, setVergiNo] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [plakaYok, setPlakaYok] = useState(false);
  const [plaka, setPlaka] = useState("");
  const [telefon, setTelefon] = useState("+90");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Zorunlu Trafik Sigortası</h1>

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
            value="Yeni Trafik Sigortası Başvurusu"
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

          <input
            type="tel"
            name="telefon"
            placeholder="Cep Telefonu"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            pattern="\+90\d{10}"
            maxLength="13"
            required
          />

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece trafik sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Trafik Sigortası Teklifi Al
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

      {/* POPUP */}
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
    </div>
  );
};

export default TrafikSigortasi;
