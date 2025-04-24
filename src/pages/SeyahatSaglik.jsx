import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adımlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import BilgiCard from "../components/BilgiCard";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import seyahat1 from "../assets/blog/seyahat1.jpg";
import seyahat2 from "../assets/blog/seyahat2.jpg";
import seyahat3 from "../assets/blog/seyahat3.jpg";
import seyahat4 from "../assets/blog/seyahat4.jpg";

const SeyahatSaglik = () => {
  const [gidisTarihi, setGidisTarihi] = useState("");
  const [donusTarihi, setDonusTarihi] = useState("");
  const [ulke, setUlke] = useState("");
  const [kisiler, setKisiler] = useState([{ tc: "", dogumTarihi: "" }]);
  const [telefon, setTelefon] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => setShowPopup(false);

  const kisiEkle = () => {
    if (kisiler.length >= 4) {
      alert("Maksimum kişiye ulaşıldı.");
      return;
    }
    setKisiler([...kisiler, { tc: "", dogumTarihi: "" }]);
  };

  const kisiGuncelle = (index, field, value) => {
    const yeniKisiler = [...kisiler];
    yeniKisiler[index][field] = value;
    setKisiler(yeniKisiler);
  };

  const kisiSil = (index) => {
    const yeniKisiler = kisiler.filter((_, i) => i !== index);
    setKisiler(yeniKisiler);
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">Seyahat Sağlık Sigortası</h1>

      <div className="form-container">
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
            value="Yeni Seyahat Sağlık Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          {/* Gidiş - Dönüş Tarihi */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <label className="form-label">Gidiş Tarihi</label>
              <input
                type="date"
                name="gidis_tarihi"
                value={gidisTarihi}
                onChange={(e) => setGidisTarihi(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <label className="form-label">Dönüş Tarihi</label>
              <input
                type="date"
                name="donus_tarihi"
                value={donusTarihi}
                onChange={(e) => setDonusTarihi(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Ülke */}
          <input
            type="text"
            name="ulke"
            placeholder="Gideceğiniz Ülke"
            value={ulke}
            onChange={(e) => setUlke(e.target.value)}
            required
          />

          {/* Yolcu Bilgileri */}
          {kisiler.map((kisi, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {index > 0 && (
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "#003087",
                  }}
                >
                  Kişi {index + 1}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  name={`tc_${index + 1}`}
                  placeholder="T.C. Kimlik No"
                  value={kisi.tc}
                  onChange={(e) => kisiGuncelle(index, "tc", e.target.value)}
                  pattern="\d{1}"
                  maxLength="11"
                  required
                  style={{ flex: 1 }}
                />

                <div
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <label className="form-label">Doğum Tarihi</label>
                  <input
                    type="date"
                    name={`dogum_tarihi_${index + 1}`}
                    value={kisi.dogumTarihi}
                    onChange={(e) =>
                      kisiGuncelle(index, "dogumTarihi", e.target.value)
                    }
                    required
                    style={{ flex: 1, height: "46px" }}
                  />
                </div>

                {index !== 0 && (
                  <button
                    type="button"
                    onClick={() => kisiSil(index)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Sil
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Kişi Ekle Butonu */}
          <button
            type="button"
            className="submit-btn"
            onClick={kisiEkle}
            style={{ backgroundColor: "#003087" }}
          >
            Kişi Ekle
          </button>

          {/* Telefon Numarası */}
          <div className="telefon-wrapper">
            <div className="telefon-input-group">
              <span className="telefon-prefix">+90</span>
              <input
                type="tel"
                name="telefon"
                placeholder="5XXXXXXXXX"
                value={telefon}
                onChange={(e) =>
                  setTelefon(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                pattern="5\d{9}"
                maxLength="10"
                required
                className="telefon-input"
              />
            </div>
          </div>

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece seyahat sağlık sigortası
            teklifi oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir
            şekilde kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Teklif Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya daha detaylı bilgi
            durumunda, verdiğiniz cep telefonu numarası üzerinden sizinle
            iletişime geçilebilir.
          </p>

          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </form>
      </div>

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
      <Adımlar />
      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "Seyahat Sağlık Sigortası Nedir?",
            content:
              "Yurt dışında karşılaşabileceğiniz hastalık, kaza veya acil tıbbi durumlarda devreye giren ve sağlık giderlerinizi karşılayan özel bir sigorta türüdür. Seyahatiniz boyunca sizi güvence altına alır.",
          },
          {
            title: "Seyahat Sigortası Zorunlu mu?",
            content:
              "Her ülke için zorunlu olmasa da, vize isteyen ülkelerin büyük çoğunluğu seyahat sağlık sigortasını başvuru şartı olarak kabul eder. Özellikle Schengen bölgesi ülkeleri için mutlaka gereklidir.",
          },
          {
            title: "Hangi Ülkeler Bu Sigortayı İstiyor?",
            content:
              "Avrupa Birliği ülkeleri başta olmak üzere; İngiltere, Amerika, Kanada ve birçok Asya ülkesi vize sürecinde geçerli bir seyahat sağlık sigortası talep eder.",
          },
          {
            title: "Seyahat Sigortası Neleri Kapsar?",
            content:
              "Acil tıbbi müdahaleler, hastaneye yatış, doktor muayenesi, ilaç giderleri, ambulans hizmetleri gibi birçok temel sağlık ihtiyacını karşılar. Kapsam, poliçeye göre genişleyebilir.",
          },
        ]}
      />
        <AnlasmaliSirketler />
      <h2 className="rehber">Seyahat Sağlık Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Seyahat Sağlık Sigortası Nedir?"
          image={seyahat1}
          summary="Yurt dışı seyahatlerde sağlık giderlerini karşılayan, zorunlu olmayan ama önerilen bir sigorta türüdür."
          fullContent="Seyahat sağlık sigortası, yurt dışına çıkmadan önce alınan ve seyahatiniz sırasında oluşabilecek sağlık sorunlarına karşı sizi güvence altına alan bir sigorta türüdür. Bu sigorta sayesinde hastane, muayene, ilaç gibi sağlık hizmetlerinden ücretsiz ya da indirimli şekilde yararlanabilirsiniz. Vize başvurularında da sıklıkla talep edilen bu sigorta, özellikle Schengen ülkeleri gibi bölgelerde gereklidir. Acil tıbbi müdahale, hastaneye yatış, ambulans hizmetleri gibi giderler poliçe kapsamına göre karşılanır."
        />

        <BilgiCard
          title="Vize Başvurularında Seyahat Sağlık Sigortası Gerekli mi?"
          image={seyahat2}
          summary="Evet. Özellikle Schengen ülkeleri ve birçok Avrupa ülkesi vize için bu sigortayı zorunlu kılar."
          fullContent="Birçok ülke, vize başvurusu esnasında geçerli bir seyahat sağlık sigortası talep etmektedir. Özellikle Schengen bölgesine yapılacak seyahatlerde bu sigorta olmadan vize başvurusu kabul edilmez. Sigortanın belirli bir minimum teminat tutarına sahip olması (örneğin 30.000 Euro) ve seyahat süresi boyunca geçerli olması gerekir. Bu sayede olası sağlık sorunlarında ülke kamu sistemi yerine sigorta devreye girer."
        />

        <BilgiCard
          title="Seyahat Sigortası Neleri Kapsar?"
          image={seyahat3}
          summary="Tıbbi tedavi, acil yardım, hastane masrafları ve gerektiğinde ülkeye dönüş gibi masrafları karşılar."
          fullContent="Seyahat sağlık sigortaları genel olarak aşağıdaki hizmetleri kapsar: acil tıbbi tedavi, hastaneye yatış, doktor muayenesi, ilaç giderleri, ambulans hizmetleri, kazalar ve ani hastalıklar sonucu oluşan tedavi masrafları. Bazı poliçelerde seyahat iptali, bavul kaybı ve cenaze nakli gibi ek teminatlar da bulunabilir. Poliçenin kapsamı sigorta şirketine ve plan türüne göre değişiklik gösterebilir."
        />

        <BilgiCard
          title="Seyahat Sağlık Sigortası Zorunlu mu?"
          image={seyahat4}
          summary="Türkiye'den çıkarken zorunlu değil ama gideceğiniz ülkeye göre zorunlu hale gelebilir."
          fullContent="Seyahat sağlık sigortası Türkiye'den çıkışta zorunlu olmasa da, birçok ülkeye girişte zorunludur. Özellikle Avrupa ülkeleri, Amerika, Kanada ve bazı Asya ülkeleri bu sigortayı vize şartı olarak sunar. Seyahat süresince karşılaşabileceğiniz sağlık sorunlarına karşı önlem alınmasını sağlayan bu sigorta, beklenmeyen masraflardan korunmanız açısından büyük fayda sağlar. Zorunlu olmasa bile yaptırılması şiddetle tavsiye edilir."
        />
      </div>
      <SigortaButtonsFiltered />
    </div>
  );
};

export default SeyahatSaglik;
