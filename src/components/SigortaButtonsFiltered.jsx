import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SigortaButtonsFiltered.css";

import trafikIcon from "../assets/icons/trafik.svg";
import kaskoIcon from "../assets/icons/kasko.svg";
import immIcon from "../assets/icons/imm.svg";
import daskIcon from "../assets/icons/dask.svg";
import tamamlayiciIcon from "../assets/icons/tamamlayici.svg";
import seyahatIcon from "../assets/icons/seyahat.svg";

const sigortaOptions = [
  { path: "/trafik-sigortasi", icon: trafikIcon, label: "Zorunlu Trafik" },
  { path: "/kasko", icon: kaskoIcon, label: "Kasko" },
  { path: "/imm", icon: immIcon, label: "İMM" },
  { path: "/dask", icon: daskIcon, label: "DASK" },
  {
    path: "/tamamlayici-saglik",
    icon: tamamlayiciIcon,
    label: "Tamamlayıcı Sağlık",
  },
  { path: "/seyahat-saglik", icon: seyahatIcon, label: "Seyahat Sağlık" },
];

const SigortaButtonsFiltered = () => {
  const location = useLocation();

  const filteredOptions = sigortaOptions.filter(
    (option) => option.path !== location.pathname
  );

  return (
    <div className="filtered-button-wrapper">
      <div className="filtered-content">
        <h2 className="filtered-title-section">Diğer Sigortalar</h2>
        <div className="filtered-button-row">
          {filteredOptions.map(({ path, icon, label }, index) => (
            <Link key={path} to={path} className="filtered-card-item">
              <img src={icon} alt={label} className="filtered-icon" />
              <span className="filtered-title">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SigortaButtonsFiltered;
