// components/SigortaButtons.jsx
import React from "react";
import "./SigortaButtons.css";

// İkonları buraya import edebilirsin
import trafikIcon from "../assets/icons/trafik.svg";
import kaskoIcon from "../assets/icons/kasko.svg";
import immIcon from "../assets/icons/imm.svg";
import daskIcon from "../assets/icons/dask.svg";
import tamamlayiciIcon from "../assets/icons/tamamlayici.svg";
import seyahatIcon from "../assets/icons/seyahat.svg";

const SigortaButtons = () => {
  return (
    <div className="sigorta-button-wrapper">
      <div className="sigorta-top-row">
        <div className="sigorta-card large">
          <img src={trafikIcon} alt="Trafik" className="sigorta-icon" />
          <span className="sigorta-title">Zorunlu Trafik</span>
        </div>
        <div className="sigorta-card large">
          <img src={kaskoIcon} alt="Kasko" className="sigorta-icon" />
          <span className="sigorta-title">Kasko</span>
        </div>
      </div>

      <div className="sigorta-bottom-row">
        <div className="sigorta-card small">
          <img src={immIcon} alt="İMM" className="sigorta-icon" />
          <span className="sigorta-title">İMM</span>
        </div>
        <div className="sigorta-card small">
          <img src={daskIcon} alt="DASK" className="sigorta-icon" />
          <span className="sigorta-title">DASK</span>
        </div>
        <div className="sigorta-card small">
          <img src={tamamlayiciIcon} alt="Tamamlayıcı" className="sigorta-icon" />
          <span className="sigorta-title">Tamamlayıcı Sağlık</span>
        </div>
        <div className="sigorta-card small">
          <img src={seyahatIcon} alt="Seyahat" className="sigorta-icon" />
          <span className="sigorta-title">Seyahat Sağlık</span>
        </div>
      </div>
    </div>
  );
};

export default SigortaButtons;
