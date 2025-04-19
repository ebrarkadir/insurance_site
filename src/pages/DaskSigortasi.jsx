import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import dask1 from "../assets/blog/dask1.jpg";
import dask2 from "../assets/blog/dask2.jpg";
import dask3 from "../assets/blog/dask3.jpg";
import dask4 from "../assets/blog/dask4.jpg";
import BilgiCard from "../components/BilgiCard";

const DaskSigortasi = () => {
  const [basvuruTipi, setBasvuruTipi] = useState("yeni");
  const [tip, setTip] = useState("bireysel");
  const [tcKimlik, setTcKimlik] = useState("");
  const [vergiNo, setVergiNo] = useState("");
  const [telefon, setTelefon] = useState("");
  const [adres, setAdres] = useState("");
  const [daskPoliceNo, setDaskPoliceNo] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => setShowPopup(true), 300);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trafik-wrapper">
      <h1 className="form-title">DASK (Zorunlu Deprem Sigortası)</h1>

      <div className="form-container">
        {/* Yeni/Yenileme Butonları */}
        <div className="tab-buttons">
          <button
            className={basvuruTipi === "yeni" ? "active" : ""}
            onClick={() => setBasvuruTipi("yeni")}
            type="button"
          >
            Yeni Poliçe
          </button>
          <button
            className={basvuruTipi === "yenileme" ? "active" : ""}
            onClick={() => setBasvuruTipi("yenileme")}
            type="button"
          >
            Yenileme Poliçe
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
          <input type="hidden" name="_subject" value="Yeni DASK Başvurusu" />
          <input type="hidden" name="_template" value="box" />

          {/* Bireysel/Kurumsal Butonları - Her iki başvuru tipinde de */}
          <div className="tab-buttons">
            <button
              className={tip === "bireysel" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setTip("bireysel");
              }}
              type="button"
            >
              Bireysel
            </button>
            <button
              className={tip === "kurumsal" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setTip("kurumsal");
              }}
              type="button"
            >
              Kurumsal
            </button>
          </div>

          {/* Ortak Giriş Alanları */}
          {tip === "bireysel" && (
            <input
              type="text"
              name="tc_kimlik"
              placeholder="T.C. Kimlik No"
              value={tcKimlik}
              onChange={(e) => setTcKimlik(e.target.value)}
              pattern="\d{12}"
              maxLength="12"
              required
            />
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
              required
            />
          )}

          {/* Telefon */}
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

          {/* Yeni poliçede adres, yenilemede DASK numarası */}
          {basvuruTipi === "yeni" ? (
            <textarea
              name="adres"
              placeholder="Açık Adres"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
              rows="4"
              required
            ></textarea>
          ) : (
            <input
              type="text"
              name="dask_police_no"
              placeholder="DASK Poliçe Numarası"
              value={daskPoliceNo}
              onChange={(e) => setDaskPoliceNo(e.target.value)}
              required
            />
          )}

          {/* Açıklama & Uyarı */}
          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece DASK sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            DASK Teklifi Al
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

      <Adimlar />
      <SigortaBilgiKutulari
        bilgiler={[
          {
            title: "DASK Sigortası Nedir?",
            content:
              "DASK, yani Zorunlu Deprem Sigortası; deprem ve buna bağlı yangın, infilak, tsunami gibi afetlerin yol açtığı maddi zararları karşılamak için devlet destekli bir sigorta sistemidir.",
          },
          {
            title: "DASK Sigortası Zorunlu mu?",
            content:
              "Evet, DASK sigortası Türkiye'de zorunludur. Tapu işlemleri, elektrik-su bağlatma gibi işlemler için geçerli bir DASK poliçesi olması gerekir.",
          },
          {
            title: "DASK Hangi Hasarları Karşılar?",
            content:
              "DASK; deprem ve deprem kaynaklı yangın, infilak, yer kayması, tsunami gibi doğal afetlerin neden olduğu bina hasarlarını karşılar. Eşya ve taşınabilir mallar bu kapsama dahil değildir.",
          },
          {
            title: "DASK Poliçesi Ne Kadar Süreyle Geçerlidir?",
            content:
              "DASK poliçeleri 1 yıl süreyle geçerlidir. Süresi dolmadan yenilenmesi gerekir; aksi takdirde teminat sona erer ve resmi işlemlerde geçersiz sayılır.",
          },
        ]}
      />

      <AnlasmaliSirketler />
      <div className="bilgi-card-grid">
        <BilgiCard
          title="DASK Sigortası Nedir ve Neden Gereklidir?"
          image={dask1}
          summary="DASK, deprem sonrası oluşabilecek hasarları karşılamak için zorunlu tutulan devlet destekli bir sigortadır."
          fullContent="Zorunlu Deprem Sigortası (DASK), Türkiye’deki tüm meskenler için yasal olarak yaptırılması gereken bir sigorta türüdür. Deprem sonrası meydana gelen hasarların ekonomik yükünü hafifletmek ve vatandaşları güvence altına almak amacıyla oluşturulmuştur. Elektrik, su gibi abonelik işlemleri ve tapu devirleri için geçerli bir DASK poliçesi zorunludur."
        />

        <BilgiCard
          title="DASK Neleri Kapsar, Neleri Kapsamaz?"
          image={dask2}
          summary="DASK yalnızca bina hasarlarını kapsar. Eşyalar ve kira kaybı dahil değildir."
          fullContent="DASK; depremin neden olduğu doğrudan fiziksel bina hasarlarını karşılar. Buna yangın, infilak, tsunami ve yer kayması gibi deprem sonrası olaylar da dahildir. Ancak, evdeki eşyalar, kira kaybı, iş durması veya manevi zararlar gibi durumlar kapsam dışıdır. Bu tür teminatlar, isteğe bağlı konut sigortaları ile güvence altına alınabilir."
        />

        <BilgiCard
          title="DASK Poliçesi Kaç Gün Geçerlidir ve Yenilenmezse Ne Olur?"
          image={dask3}
          summary="Poliçe 1 yıl geçerlidir. Yenilenmediğinde teminat sona erer."
          fullContent="Zorunlu Deprem Sigortası poliçeleri 365 gün süreyle geçerlidir. Süresi dolan poliçeler otomatik olarak yenilenmez; sigorta sahibinin poliçeyi süresi dolmadan önce yenilemesi gerekir. Aksi halde deprem sonrası oluşacak zararlarda devlet desteği alınamaz ve teminatsız kalınır. Bu nedenle düzenli olarak yenilenmesi oldukça önemlidir."
        />

        <BilgiCard
          title="DASK Sigortası Nasıl ve Nereden Yaptırılır?"
          image={dask4}
          summary="DASK tüm sigorta şirketleri ve online platformlar üzerinden kolayca yaptırılabilir."
          fullContent="DASK sigortası, T.C. kimlik numarası ve tapu bilgileriyle birlikte herhangi bir sigorta acentesinden, bankalardan ya da e-Devlet ile entegre çalışan online platformlardan yaptırılabilir. Poliçede bina adresi, yapı tarzı, inşa yılı gibi bilgiler istenir. İşlem genellikle birkaç dakika içinde tamamlanır ve anında geçerlilik kazanır."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default DaskSigortasi;
