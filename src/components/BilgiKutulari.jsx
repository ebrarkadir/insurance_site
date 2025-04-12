import React, { useState } from "react";
import "./BilgiKutulari.css";

const BilgiKutulari = ({ baslik, bilgiler }) => {
  const [aktifIndex, setAktifIndex] = useState(null);

  return (
    <div className="bilgi-kutulari-container">
      <h2 className="bilgi-baslik">{baslik}</h2>
      <div className="bilgi-kart-wrapper">
        {bilgiler.map((item, index) => (
          <div key={index} className="bilgi-kart">
            <img src={item.resim} alt={item.baslik} />
            <p className="bilgi-tarih">{item.tarih}</p>
            <h3>{item.baslik}</h3>
            <p>{item.kisaIcerik}</p>
            <button onClick={() => setAktifIndex(index)} className="devam-btn">
              Devamını Oku →
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {aktifIndex !== null && (
        <div className="popup-overlay" onClick={() => setAktifIndex(null)}>
          <div className="popup-icerik" onClick={(e) => e.stopPropagation()}>
            <button className="kapat-btn" onClick={() => setAktifIndex(null)}>
              ✖
            </button>
            <h2>{bilgiler[aktifIndex].baslik}</h2>
            <p>{bilgiler[aktifIndex].tamIcerik}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BilgiKutulari;
