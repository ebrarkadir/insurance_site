import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import BilgiCard from "../components/BilgiCard";
import imm1 from "../assets/blog/imm1.jpg";
import imm2 from "../assets/blog/imm2.jpg";
import imm3 from "../assets/blog/imm3.jpg";
import imm4 from "../assets/blog/imm4.jpg";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";

const ImmSigortasi = () => {
  const [tip, setTip] = useState("bireysel");
  const [tcKimlik, setTcKimlik] = useState("");
  const [vergiNo, setVergiNo] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [plakaYok, setPlakaYok] = useState(false);
  const [plaka, setPlaka] = useState("");
  const [telefon, setTelefon] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">İhtiyari Mali Mesuliyet (İMM) Sigortası</h1>

      <div className="form-container">
        <div className="tab-buttons">
          <button
            className={tip === "bireysel" ? "active" : ""}
            onClick={() => setTip("bireysel")}
            type="button"
          >
            Bireysel
          </button>
          <button
            className={tip === "kurumsal" ? "active" : ""}
            onClick={() => setTip("kurumsal")}
            type="button"
          >
            Kurumsal
          </button>
        </div>

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
            value="Yeni İMM Sigortası Başvurusu"
          />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="plaka"
            placeholder="Plaka"
            value={plaka}
            onChange={(e) => setPlaka(e.target.value)}
            disabled={plakaYok}
            required={!plakaYok}
          />

          <div className="checkbox-altinda">
            <input
              type="checkbox"
              id="plakaYok"
              checked={plakaYok}
              onChange={() => setPlakaYok(!plakaYok)}
            />
            <label htmlFor="plakaYok">Plakam Yok</label>
          </div>

          {tip === "bireysel" && (
            <>
              <input
                type="text"
                name="tc_kimlik"
                placeholder="T.C. Kimlik No"
                value={tcKimlik}
                onChange={(e) => setTcKimlik(e.target.value)}
                pattern="\d{12}"
                maxLength="12"
                minLength="12"
                required
              />
              <input
                type="date"
                name="dogum_tarihi"
                value={dogumTarihi}
                onChange={(e) => setDogumTarihi(e.target.value)}
                required
              />
            </>
          )}

          {tip === "kurumsal" && (
            <input
              type="text"
              name="vergi_no"
              placeholder="Vergi No"
              value={vergiNo}
              onChange={(e) => setVergiNo(e.target.value)}
              pattern="\d{11}"
              maxLength="11"
              minLength="11"
              required
            />
          )}

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
            Bu formdan ilettiğiniz bilgiler sadece İMM sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            İMM Sigortası Teklifi Al
          </button>

          <p className="form-warning">
            <strong>Önemli Not:</strong> Eksik veya daha detaylı bilgi
            durumunda, verdiğiniz cep telefonu numarası üzerinden sizinle
            iletişime geçilebilir.
          </p>

          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}
          ></iframe>
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

      <Adimlar />

      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "İMM Sigortası Nedir?",
            content:
              "İhtiyari Mali Mesuliyet (İMM) sigortası, zorunlu trafik sigortasının limitlerini aşan durumlarda devreye girerek ek güvence sağlar.",
          },
          {
            title: "İMM Limitsiz Ne Demek?",
            content:
              "İMM limitsiz teminat, poliçede belirtilen özel bir üst limit olmaksızın, hasar durumunda karşı tarafın tüm zararlarını karşılayabilen bir seçenektir.",
          },
          {
            title: "İMM Sigortası Zorunlu mu?",
            content:
              "Hayır, İMM sigortası zorunlu değildir. Ancak olası büyük hasarlarda yüksek maliyetleri karşılamak için önerilen isteğe bağlı bir sigorta türüdür.",
          },
          {
            title: "İMM Teminatları Nelerdir?",
            content:
              "İMM sigortası; ölüm, yaralanma, maddi zarar gibi üçüncü şahıslara verilen zararları zorunlu sigortayı aşan kısımlarıyla birlikte teminat altına alır.",
          },
        ]}
      />

      <AnlasmaliSirketler />
      <div className="bilgi-card-grid">
        <BilgiCard
          title="İMM Sigortası Nedir ve Neden Gereklidir?"
          image={imm1}
          summary="İMM Sigortası, zorunlu trafik sigortasının yetersiz kaldığı durumlarda ek koruma sağlar."
          fullContent="İhtiyari Mali Mesuliyet (İMM) sigortası, trafik kazalarında zorunlu sigortanın karşılayamadığı ek zararları güvence altına alır. Örneğin; bir kazada karşı tarafın zararları 1.000.000 TL ise ve zorunlu sigorta sadece 650.000 TL ödeme yapıyorsa, geri kalan 350.000 TL’lik kısmı İMM sigortası öder. Bu sayede araç sahibi maddi olarak büyük bir yükten kurtulur."
        />

        <BilgiCard
          title="Zorunlu Trafik Sigortası ile İMM Sigortası Arasındaki Fark Nedir?"
          image={imm2}
          summary="Zorunlu trafik sigortası sınırlı ödeme yaparken, İMM ile bu sınırlar genişletilir."
          fullContent="Zorunlu trafik sigortası, yalnızca belirlenen teminat limitlerine kadar karşı tarafın zararlarını öder. Ancak kazalar her zaman bu limitler içinde kalmayabilir. İMM sigortası bu sınırların ötesine geçerek sürücüyü daha yüksek maddi sorumluluklardan korur. Özellikle büyük kazalarda ciddi zararların karşılanmasında hayati rol oynar."
        />

        <BilgiCard
          title="İMM Sigortası Hangi Durumları Kapsar?"
          image={imm3}
          summary="İMM sigortası, trafik kazalarında ek hasar ve zararları kapsar."
          fullContent="İMM sigortası; üçüncü şahıslara verilen maddi ve bedeni zararlar, ölüm ve sakatlık gibi yüksek tazminat risklerini kapsar. Ayrıca bazı poliçelerde manevi tazminat talepleri de dahil edilebilir. Örneğin; bir kazada birden fazla kişi zarar gördüyse ve zarar zorunlu sigortanın üstündeyse, İMM devreye girerek tamamlayıcı ödeme yapar."
        />

        <BilgiCard
          title="İMM Sigortası Yaptırmak Zorunlu mudur?"
          image={imm4}
          summary="Hayır, zorunlu değildir ancak büyük kazalarda sizi korur."
          fullContent="İMM sigortası isteğe bağlıdır ancak tavsiye edilir. Zorunlu olmasa da, maddi güvence açısından büyük avantajlar sağlar. Günümüzde trafik kazalarının mali boyutları arttığından, zorunlu sigortanın ötesine geçmek isteyenler için ideal bir çözümdür."
        />
      </div>
      <SigortaButtonsFiltered />
    </div>
  );
};

export default ImmSigortasi;
