import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import HasarsizlikTablosu from "../components/HasarsizlikTablosu";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import BilgiCard from "../components/BilgiCard";
import cezaResmi from "../assets/blog/ceza.jpg";
import esdegerResmi from "../assets/blog/esdeger.jpg";
import kacgunResmi from "../assets/blog/kacgun.jpg";
import yenilemeResmi from "../assets/blog/yenileme.jpg";

const TrafikSigortasi = () => {
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
      <h1 className="form-title">Zorunlu Trafik Sigortası</h1>

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
            value="Yeni Trafik Sigortası Başvurusu"
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
            Bu formdan ilettiğiniz bilgiler sadece trafik sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            Trafik Sigortası Teklifi Al
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
      <HasarsizlikTablosu />
      <AnlasmaliSirketler />

      <h2 className="rehber">Trafik Sigortası Rehberi</h2>
      <div className="bilgi-card-grid">
        <BilgiCard
          title="Trafik Sigortası Yaptırmama Cezası Nedir?"
          image={cezaResmi}
          summary="Trafik sigortası yaptırmazsanız 2023'te 436 TL ceza kesilir. Erken ödeme ile 327 TL'ye düşer."
          fullContent="2023 yılında ödeyeceğiniz trafik sigortası yaptırmama cezası 436 TL olarak uygulanmaya başladı. Buna göre cezasını 15 gün içerisinde peşin ödeyen araç sahipleri % 25 indirimden faydalanarak 327 TL ödüyor. Ancak trafik sigortası yaptırmamanın cezası bununla da sınırlı kalmıyor. Trafik sigortası zamanında yaptırılmazsa, araç sahibinin trafik sigortası basamağı herhangi bir kaza yapmamış olsa bile sabit kalıyor ve trafik sigortası poliçesinde hasarsızlık indirim hakkı kaybediliyor. Bununla birlikte zorunlu trafik sigortasını yaptırmama ve 1 yıllık poliçe süresi dolan sigortayı yenilememe durumunda, geçen her ay için %5 oranında gecikme zammı uygulanıyor. Gecikme zammı %50 ile sınırlandırılmış."
        />
        <BilgiCard
          title="Eşdeğer Parça Nedir?"
          image={esdegerResmi}
          summary="Eşdeğer parçalar orijinaliyle aynı işlevi görür. 3 yaş altı araçlarda öncelik orijinalde."
          fullContent="Eşdeğer parça, hasarlı araçlarda tamir işlemi sırasında kullanılır. Bu parçalar orijinali ile aynı işleve sahip, orijinaline en yakın parça olup fakat orijinal olmayan parçalardır. Bu parçalara ikame parça da denilmektedir.
          Kaza tarihinde 3 yıldan daha yeni olan araçlarda bulunan hasarlı parça onarılamıyorsa, öncelikle orijinali ile değiştirilecektir. Eğer orijinal parça bulunamıyorsa bu durumda eşdeğer parça uygulaması devreye girer. Hasarlı parça, eşdeğer parça ya da ömrünü tamamlamış araçlardan elde edilen orijinal parça ile değiştirilir. Daha eski olan araçlarda, hasar gören parça onarılamıyorsa eşdeğer parça ile değiştirilir. Eğer eşdeğer parça bulunamıyorsa, bu durumda orijinali ile değiştirilecektir."
        />
        <BilgiCard
          title="Trafik Sigortası Kaç Gün İçinde Yapılmalıdır?"
          image={kacgunResmi}
          summary="2. el araçta 15 gün süreniz var. Sıfır araçta trafiğe çıkmadan önce sigorta şart."
          fullContent="Trafiğe yeni çıkacak sıfır araçlar ile 2. el alınan araçlar için, trafik sigortası poliçesi yaptırırken dikkat edilmesi gereken hususlar var.
          Aracını satan kişi noter satış sözleşmesi ile trafik sigortasını iptal ettirmeli ve kalan gün sayısı kadar prim tutarını iade almalıdır. Bu durumda satın alınan araç sigortadan düşeceği için aracın yeni sahibinin trafik sigortası yaptırması gerekir. Buradaki önemli husus şu: Aracın noter satışı tamamlandıktan sonra, satan kişi sigortayı iptal ettirse dahi, aracın mevcut trafik sigortası poliçesi 15 gün boyunca kullanılabilir. 15 günlük süre 2. el araç sahibine yeni bir trafik sigortası poliçesi satın alması için verilmektedir. Bu süreyi dolduran ve poliçe satın almayan araç sahibi, trafik kontrollerinde trafikten men edilme cezası ile karşı karşıya kalabilir.
          Sıfır kilometre araç satın alınırken trafik tescil işlemleri yapılır ve araç ruhsatı hazırlanır. Ruhsat işlemleri sırasında Emniyet Genel Müdürlüğü’nce araç sahibinden, zorunlu trafik sigortası poliçesini ibraz etmesi istenir. Bu nedenle aracın trafiğe çıkmadan önce trafik sigortası yaptırılmalıdır. Sigorta şirketleri, sıfır araçların trafik sigortası poliçelerini ruhsata ihtiyaç olmadan aracın motor numarası, şasi numarası ve modeli esas alarak düzenleyebiliyor."
        />

        <BilgiCard
          title="Trafik Sigortası Bitince Kaç Gün İçerisinde Yenilenmelidir?"
          image={yenilemeResmi}
          summary="Sigortanız bittiği gün yenilemelisiniz. Ertesi gün trafiğe çıkmak yasaktır."
          fullContent="Zorunlu trafik sigortası, poliçenin bitiş tarihi itibarıyla hemen yenilenmelidir. Yasal olarak bir gün bile sigortasız şekilde trafiğe çıkmak yasaktır. Poliçesiz araçlar tespit edildiğinde para cezası, araç bağlama ve trafikten men gibi yaptırımlarla karşı karşıya kalınabilir.
          Yeni poliçe, mevcut poliçenin bitiş tarihinden itibaren geçerli olur. Bu nedenle sigorta süresi dolmadan birkaç gün önce yenileme işlemi yapılması önerilir. Bu sayede kesintisiz bir koruma sağlanmış olur ve cezai yaptırımların önüne geçilir."
        />
      </div>

      <SigortaButtonsFiltered />
    </div>
  );
};

export default TrafikSigortasi;
