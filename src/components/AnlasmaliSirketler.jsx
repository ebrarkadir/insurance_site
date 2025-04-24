
import React from "react";
import "./AnlasmaliSirketler.css";

import hdi from "../assets/partners/hdi.png";
import allianz from "../assets/partners/allianz.png";
import nippon from "../assets/partners/nippon.png";
import hepiyi from "../assets/partners/hepiyi.png";
import quick from "../assets/partners/quick.png";
import magdeburger from "../assets/partners/magdeburger.png";
import ray from "../assets/partners/ray.png";



const AnlasmaliSirketler = () => {
  return (
    <div className="partner-section">
      <h2 className="partner-title">Anlaşmalı Sigorta Şirketleri</h2>
      <p className="partner-desc">
        Çetin Sigorta, güvenilir iş ortaklarıyla sizlere en hızlı ve avantajlı sigorta tekliflerini sunar. 
      </p>
      <br />

      <div className="partner-logos">
        <img src={ray} alt="HDI" />
        <img src={allianz} alt="Allianz" />
        <img src={nippon} alt="Anadolu Sigorta" />
        <img src={hepiyi} alt="Hepiyi" />
        <img src={quick} alt="Quick" />
        <img src={magdeburger} alt="Magdeburger" />
        <img src={hdi} alt="Ray Sigorta" />
        
      </div>
    </div>
    
  );
};

export default AnlasmaliSirketler;
