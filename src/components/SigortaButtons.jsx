import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SigortaButtons.css";

// ikonlar...
import trafikIcon from "../assets/icons/trafik.svg";
import kaskoIcon from "../assets/icons/kasko.svg";
import immIcon from "../assets/icons/imm.svg";
import daskIcon from "../assets/icons/dask.svg";
import tamamlayiciIcon from "../assets/icons/tamamlayici.svg";
import seyahatIcon from "../assets/icons/seyahat.svg";
import isyeriIcon from "../assets/icons/isyeri.svg";
import konutIcon from "../assets/icons/konut.svg";
import saglikIcon from "../assets/icons/saglik.svg";
import ferdiIcon from "../assets/icons/ferdi.svg";

const SigortaButtons = () => {
  const [showMore, setShowMore] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  const toggleShowMore = () => {
    if (showMore) {
      setIsHiding(true);
      setTimeout(() => {
        setShowMore(false);
        setIsHiding(false);
      }, 250); // 👈 animasyon süresi kadar
    } else {
      setShowMore(true);
    }
  };

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

      {showMore && (
        <div className={`sigorta-bottom-row more-buttons ${isHiding ? "fade-slide-hide" : "fade-slide"}`}>
          <Link to="/isyeri" className="sigorta-card small">
            <img src={isyeriIcon} alt="İşyeri" className="sigorta-icon" />
            <span className="sigorta-title">İşyeri </span>
          </Link>
          <Link to="/konut" className="sigorta-card small">
            <img src={konutIcon} alt="Konut" className="sigorta-icon" />
            <span className="sigorta-title">Konut </span>
          </Link>
          <Link to="/saglik" className="sigorta-card small">
            <img src={saglikIcon} alt="Sağlık" className="sigorta-icon" />
            <span className="sigorta-title">Sağlık </span>
          </Link>
          <Link to="/ferdi-kaza" className="sigorta-card small">
            <img src={ferdiIcon} alt="Ferdi" className="sigorta-icon" />
            <span className="sigorta-title">Ferdi Kaza</span>
          </Link>
        </div>
      )}

      <div className="more-button-container">
        <button className="more-button" onClick={toggleShowMore}>
          {showMore ? "Gizle" : "Daha Fazlası"}
        </button>
      </div>
    </div>
  );
};

export default SigortaButtons;
