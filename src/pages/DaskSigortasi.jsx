import React, { useState } from "react";
import "./TrafikSigortasi.css";
import Adimlar from "../components/SigortaAdimlar";
import AnlasmaliSirketler from "../components/AnlasmaliSirketler";
import SigortaButtonsFiltered from "../components/SigortaButtonsFiltered";
import SigortaBilgiKutulari from "../components/SigortaBilgiKutulari";
import BilgiCard from "../components/BilgiCard";
import dask1 from "../assets/blog/dask1.jpg";
import dask2 from "../assets/blog/dask2.jpg";
import dask3 from "../assets/blog/dask3.jpg";
import dask4 from "../assets/blog/dask4.jpg"; 

const DaskSigortasi = () => {
  const [poliçeTipi, setPoliçeTipi] = useState("yeni");
  const [tip, setTip] = useState("bireysel");
  const [tcKimlik, setTcKimlik] = useState("");
  const [vergiNo, setVergiNo] = useState("");
  const [daskNo, setDaskNo] = useState("");
  const [adres, setAdres] = useState("");
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
      <h1 className="form-title">DASK Sigortası</h1>

      <div className="form-container">
        <div className="tab-buttons">
          <button
            className={poliçeTipi === "yeni" ? "active" : ""}
            onClick={() => setPoliçeTipi("yeni")}
            type="button"
          >
            Yeni Poliçe
          </button>
          <button
            className={poliçeTipi === "yenileme" ? "active" : ""}
            onClick={() => setPoliçeTipi("yenileme")}
            type="button"
          >
            Yenileme Poliçe
          </button>
        </div>

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
          <input type="hidden" name="_subject" value="Yeni DASK Başvurusu" />
          <input type="hidden" name="_template" value="box" />

          {tip === "bireysel" && (
            <input
              type="text"
              name="tc_kimlik"
              placeholder="T.C. Kimlik No"
              value={tcKimlik}
              onChange={(e) => setTcKimlik(e.target.value)}
              pattern="\d{11}"
              maxLength="11"
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

          {poliçeTipi === "yenileme" && (
            <input
              type="text"
              name="dask_poliçe_no"
              placeholder="DASK Poliçe Numarası"
              value={daskNo}
              onChange={(e) => setDaskNo(e.target.value)}
              required
            />
          )}

          <div className="telefon-wrapper">
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

          <textarea
            name="adres"
            placeholder="Açık Adresiniz"
            value={adres}
            onChange={(e) => setAdres(e.target.value)}
            rows="4"
            required
            style={{ resize: "none" }}
          ></textarea>

          <p className="form-info">
            Bu formdan ilettiğiniz bilgiler sadece DASK sigortası teklifi
            oluşturmak amacıyla tarafımıza ulaştırılacak ve hiçbir şekilde
            kaydedilmeyecektir.
          </p>

          <button type="submit" className="submit-btn">
            DASK Sigortası Teklifi Al
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
          title="DASK Teminatları Nelerdir? "
          image={dask1}
          summary="DASK, belediye sınırları içerisinde bulunan tapuya kayıtlı ve özel mülkiyete ait taşınmazlar üzerinde mesken olarak inşa edilmiş yapılar ile kat mülkiyeti kanununda belirlenmiş bağımsız bölümler ve bu binalarda bulunan büro ya da ticarethanelerde oluşan hasarlar içinde geçerlidir."
          fullContent="DASK, belediye sınırları içerisinde bulunan tapuya kayıtlı ve özel mülkiyete ait taşınmazlar üzerinde mesken olarak inşa edilmiş yapılar ile kat mülkiyeti kanununda belirlenmiş bağımsız bölümler ve bu binalarda bulunan büro ya da ticarethanelerde oluşan hasarlar içinde geçerlidir.
            6305 sayılı kanun gereği poliçe kapsamında
            Binanın temeli,
            Ana duvarları,
            Bahçe duvarları ile bağımsız bölümleri ayıran ortak duvarlar ve istinat duvarları,
            Taban ve tavanlar,
            Merdivenler,
            Asansörler,
            Koridorlar,
            Binaya ait çatılar ile bacalar ve binaya ait tamamlayıcı bölümlere ait yerlerde
            meydana gelen hasarlar teminat altındadır. Bu koşulları sağlayan binalar dışında ayrıca kat irtifakı olan binalar, tapu tahsisi yapılmamış kooperatif evleri ve aynı zamanda tapuda arsa olarak gözüken yapılarda poliçe kapsamındadır."
        />

        <BilgiCard
          title="Tapudaki İşlerinizin Aksamaması İçin DASK Yaptırın "
          image={dask2}
          summary="Tapu işlemleri sırasında Zorunlu Deprem Sigortası poliçe kontrolü yapılıyor. Aksi halde DASK poliçesi olmadan taşınmaz mallarınızın alım-satım, ipotek ve kiralama işlemlerinin yapılması mümkün değil."
          fullContent="
            Tapu işlemleri sırasında Zorunlu Deprem Sigortası poliçe kontrolü yapılıyor. Aksi halde DASK poliçesi olmadan taşınmaz mallarınızın alım-satım, ipotek ve kiralama işlemlerinin yapılması mümkün değil. Kiralanan ya da satın alınan konutun devri sırasında da mutlaka DASK poliçesinin gösterilmesi gerekiyor. Bu yüzden özellikle kiracıların, kiraladıkları konutun mülk sahibinden DASK poliçe numarasını öğrenmeleri, aboneliklerin devri sırasında karışıklığın ve vakit kaybının önüne geçmek adına önemli."
        />

        <BilgiCard
          title="DASK Primi ve Sigorta Bedelini Hesaplama Önerileri"
          image={dask3}
          summary="Zorunlu Deprem Sigortası DASK, depremde ve deprem sonrasında yaşanabilecek heyelan, yangın, infilak gibi doğal afetlerin sonucunda meydana gelen maddi hasarınızı teminat altına alıyor."
          fullContent="Zorunlu Deprem Sigortası DASK, depremde ve deprem sonrasında yaşanabilecek heyelan, yangın, infilak gibi doğal afetlerin sonucunda meydana gelen maddi hasarınızı teminat altına alıyor. Deprem sigortasında ödeyeceğiniz primler deprem riski yüksek olan bölgelerde, deprem riski düşük olan bölgelere göre daha yüksek oluyor. Aynı bölgede ödenen primler de değişkenlik gösterir. Bunun nedeni ise ödenecek prim bedellerinin hesaplamalarında mesken metrekaresi, bina yaşı, yapı durumu gibi değişkenlik gösterecek faktörlerin kullanılması ve il içinde de deprem risk alanlarının farklılık göstermesi."
        />

        <BilgiCard
          title="Kiracılar Kendi Adına DASK Yaptırabilir mi? "
          image={dask4}
          summary="Zorunlu Deprem Sigortası, diğer adıyla DASK ev sahiplerinin kendi adına yaptırabileceği bir sigorta türüdür."
          fullContent="Zorunlu Deprem Sigortası, diğer adıyla DASK ev sahiplerinin kendi adına yaptırabileceği bir sigorta türüdür. Kiracı kendi adına Zorunlu Deprem Sigortası yaptıramamaktadır. Yalnızca “Sigorta Ettiren” olarak ev sahibi adına yaptırabilmektedir.
          Ev sahibine ait TCKN poliçede belirtilir ve “Sigortalı” olarak yer alır. Bu durumda da kendi adına yaptırmış sayılmayacağı için olası bir deprem durumunda tazminat ödeneceği zaman tapuda “Hak Sahibi” olarak belirtilen kişiye ödenmektedir. Kiracı tarafından yaptırılan sigortalar için, ödenen sigorta primi ev sahibinden tahsil edilebilir veya kiradan düşülebilmektedir."
        />
      </div>
      <SigortaButtonsFiltered />
    </div>
  );
};

export default DaskSigortasi;
