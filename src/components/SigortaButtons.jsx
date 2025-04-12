import React from "react";
import { Link } from "react-router-dom"; // Eklendi
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
        <Link to="/trafik-sigortasi" className="sigorta-card large">
          <img src={trafikIcon} alt="Trafik" className="sigorta-icon" />
          <span className="sigorta-title">Zorunlu Trafik</span>
        </Link>
        <Link to="/kasko" className="sigorta-card large">
          <img src={kaskoIcon} alt="Kasko" className="sigorta-icon" />
          <span className="sigorta-title">Kasko</span>
        </Link>
      </div>

      <div className="sigorta-bottom-row">
        <Link to="/imm" className="sigorta-card small">
          <img src={immIcon} alt="İMM" className="sigorta-icon" />
          <span className="sigorta-title">İMM</span>
        </Link>
        <Link to="/dask" className="sigorta-card small">
          <img src={daskIcon} alt="DASK" className="sigorta-icon" />
          <span className="sigorta-title">DASK</span>
        </Link>
        <Link to="/tamamlayici-saglik" className="sigorta-card small">
          <img src={tamamlayiciIcon} alt="Tamamlayıcı" className="sigorta-icon" />
          <span className="sigorta-title">Tamamlayıcı Sağlık</span>
        </Link>
        <Link to="/seyahat-saglik" className="sigorta-card small">
          <img src={seyahatIcon} alt="Seyahat" className="sigorta-icon" />
          <span className="sigorta-title">Seyahat Sağlık</span>
        </Link>
      </div>
    </div>
  );
};

export default SigortaButtons;
