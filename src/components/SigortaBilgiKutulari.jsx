import React from "react";
import "./SigortaBilgiKutulari.css";

const SigortaBilgiKutulari = ({ bilgiler }) => {
  return (
    <div className="sigorta-bilgi-kutulari-wrapper">
      <div className="sigorta-bilgi-kutulari-grid">
        {bilgiler.map((item, index) => (
          <div key={index} className="sigorta-bilgi-karti">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SigortaBilgiKutulari;
