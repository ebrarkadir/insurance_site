import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import HasarsizlikTablosu from "../components/HasarsizlikTablosu";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import BilgiCard from "../components/BilgiCard";
import çalıntı from "../assets/blog/çalıntı.jpg";
import esdegerResmi2 from "../assets/blog/eşdeğer2.jpg";
import sel from "../assets/blog/sel.jpg";
import kaskoResmi from "../assets/blog/kaskoPolice.jpg";
import KaskoHasarsizlikTablosu from "../components/KaskoHasarsizlikTablosu";

const KaskoSigortasi = () => {
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
      <h1 className="form-title">Kasko Sigortası</h1>

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
            value="Yeni Kasko Sigortası Başvurusu"
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
                pattern="\d{11}"
                maxLength="11"
                minLength="11"
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
              pattern="\d{10}"
              maxLength="10"
              minLength="10"
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
            Bu formdan ilettiğiniz bilgiler sadece kasko sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Kasko Sigortası Teklifi Al
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
      <KaskoHasarsizlikTablosu />
      <AnlasmaliSirketler />
      <h2 className="rehber">Kasko Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Araç Çalınmasını Kasko Karşılar mı?"
          image={çalıntı}
          summary="Kasko sigortası çalınma ve çalınmaya teşebbüs zararlarını kapsar."
          fullContent="Kasko sigortası sürücüleri çarpma, çarpılma, çalınma ve çalınmaya teşebbüs sırasında oluşabilecek zararlara karşı koruyan isteğe bağlı bir sigorta türüdür. Kasko sigortası poliçesi düzenlenirken ekletilen birçok teminat ile güvence kapsamı genişletilirken sigortalı daha geniş bir korumaya sahip olur. Kendi isteğine göre kapsamını belirlediği kasko sigortası ile araç sahibi, sigortalanan araçta meydana gelebilecek hasarın maddi yükünden kurtulur. Kasko sigortası aracı çeşitli nedenlerle oluşabilecek hasarlardan korumak amacıyla yaptırılan sigortadır. Poliçe düzenlenirken ekletilen teminatlar aracı, poliçede yer alan teminat limitleri kapsamında güvence altına alır. Sürücülerin en çok korktuğu ve gerçekleşmesi durumunda çok ağır bir maddi yüke sebep olan çalınma durumunda, kasko sigortasının önemi daha net anlaşılır. Sigorta şirketleri tarafından kasko sigortalarının ana teminatları arasında yer verilen çalınma ve çalınmaya teşebbüs durumlarında sigortalının zararı poliçede yer alan teminat limitleri kapsamında karşılanır."
        />
        <BilgiCard
          title="Orijinal ve Eşdeğer Parça Kullanımı"
          image={esdegerResmi2}
          summary="Orijinali ile aynı işlevi gören, orijinal olmayan parçalar."
          fullContent="Eşdeğer parça, hasarlı araçlarda tamir işlemi sırasında kullanılır. Bu parçalar orijinali ile aynı işleve sahip, orijinaline en yakın parça olup fakat orijinal olmayan parçalardır. Bu parçalara ikame parça da denilmektedir. Kaza tarihinde 3 yıldan daha yeni olan araçlarda bulunan hasarlı parça onarılamıyorsa, öncelikle orijinali ile değiştirilecektir. Eğer orijinal parça bulunamıyorsa bu durumda eşdeğer parça uygulaması devreye girer. Hasarlı parça, eşdeğer parça ya da ömrünü tamamlamış araçlardan elde edilen orijinal parça ile değiştirilir. Daha eski olan araçlarda, hasar gören parça onarılamıyorsa eşdeğer parça ile değiştirilir. Eğer eşdeğer parça bulunamıyorsa, bu durumda orijinali ile değiştirilecektir."
        />
        <BilgiCard
          title="Aracınız Sel ve Su Baskınlarında Teminat Altında mı?"
          image={sel}
          summary="Sel ve dolu kaynaklı zararlar, ek teminatlarla kasko kapsamına alınabilir."
          fullContent="Sel ve su baskını nedeniyle oluşan araç hasarları, kasko poliçenizde “sel ve su baskını teminatı” varsa karşılanır. Bu teminat; motor arızası, iç döşeme, cam ve elektronik donanım gibi zararları kapsar. Teminat kapsamı ve ödeme şartları poliçeye göre değişir. Sel riski olan bölgelerde bu teminatın poliçeye eklenmiş olması büyük önem taşır."
        />
        <BilgiCard
          title="Bir Kasko Poliçesinde Hangi Teminatlar Vardır?"
          image={kaskoResmi}
          summary="Kasko poliçesinde çeşitli doğal afet ve kaza teminatları yer alabilir."
          fullContent={
            "Kasko sigortası genel olarak aracın yanması, çalınması, çalınmaya teşebbüs edilmesi gibi durumları ve kaza sonucu oluşabilecek zararları güvence alır. Bunların yanında kasko poliçeleri kapsamları bakımından genişletilebilmektedir. Bir kasko poliçesi aşağıdaki teminatları da detaylı bir şekilde içerebilmekte, kimi zaman bu teminatlar isteğe bağlı olarak da poliçeye eklenebilmektedir: Aracın grev, lokavt, kargaşalık, halk hareketleri ve terör nedeniyle uğrayacağı zararlar, araçta deprem ve yanardağ püskürmesi, sel ve su baskını nedeniyle oluşan zararlar, sigara yanığı, yetkili olmayan kişiler tarafından aracın çekilmesi sonucu araçta oluşan zararlar, hukuksal koruma, sıfır kilometre araçlarda yeni değer klozu, mini onarım, aracın anahtarla çalınması, 3. şahıs bedeni zararlar (maddi+bedeni), ferdi kaza teminatı: Ölüm, sürekli sakatlık, tedavi teminatı (sürücü ve yolcular için)."
          }
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default KaskoSigortasi;
