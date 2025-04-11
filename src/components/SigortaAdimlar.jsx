import React from "react";
import "./SigortaAdimlar.css";

const SigortaAdimlar = () => {
  return (
    <section className="sigorta-adimlar-container">
      <h2 className="adimlar-baslik">
        📋 Sigorta Poliçesi Nasıl Alınır?
      </h2>
      <div className="adimlar-wrapper">
        <div className="adim-kutu">
          <div className="adim-numara">1</div>
          <p className="adim-text">Bilgilerini Gir</p>
        </div>
        <div className="adim-kutu">
          <div className="adim-numara">2</div>
          <p className="adim-text">Senin İçin Teklifleri Karşılaştıralım</p>
        </div>
        <div className="adim-kutu">
          <div className="adim-numara">3</div>
          <p className="adim-text">Sana Özel Sigortanı Al</p>
        </div>
      </div>
    </section>
  );
};

export default SigortaAdimlar;
