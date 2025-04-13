import React, { useState } from "react";
import "./BilgiCard.css";

const BilgiCard = ({ title, image, summary, fullContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bilgi-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{summary}</p>
        <button onClick={() => setOpen(true)} className="devam-btn">
          Devamını Oku →
        </button>
      </div>

      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="popup-icerik" onClick={(e) => e.stopPropagation()}>
            <button className="kapat-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
            <h2>{title}</h2>
            <p>{fullContent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BilgiCard;
