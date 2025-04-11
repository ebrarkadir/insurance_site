import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SikcaSorulanSorular.css";

const SikcaSorulanSorular = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const faqList = [
    {
      question: "Sigorta poliçemi nasıl iptal edebilirim?",
      answer:
        "Poliçenizi iptal ettirmek için bize WhatsApp veya telefon yoluyla ulaşmanız yeterlidir. Gerekli işlemleri birlikte başlatabiliriz.",
    },
    {
      question: "Yeni bir araç eklemek için ne yapmalıyım?",
      answer:
        "Yeni aracınızı sistemimize eklemek için danışmanlarımızla iletişime geçebilir veya form doldurabilirsiniz.",
    },
    {
      question: "Hasar bildirimi nasıl yapılır?",
      answer:
        "Hasar bildirimi için dilediğiniz zaman WhatsApp’tan bize ulaşabilirsiniz. Belgeleri biz sizin yerinize iletebiliriz.",
    },
    {
      question: "Poliçe yenileme tarihimi nasıl öğrenirim?",
      answer:
        "Poliçenizin bitiş tarihi size SMS/mail yoluyla iletilmektedir. Aklınıza takılan her şey için bizi arayın.",
    },
    {
      question: "Hangi sigorta türlerini sunuyorsunuz?",
      answer:
        "Trafik sigortası, kasko, DASK, tamamlayıcı sağlık, seyahat sağlık gibi geniş kapsamlı sigorta hizmetleri sunuyoruz.",
    },
    {
      question: "Trafik sigortası nedir?",
      answer:
        "Zorunlu trafik sigortası, bir kazada karşı tarafa verilen zararları teminat altına alan zorunlu bir sigorta türüdür.",
    },
    {
      question: "Kasko nedir?",
      answer:
        "Kasko, aracınızın çalınması, yanması, kaza yapması gibi durumlarda oluşan zararları karşılayan isteğe bağlı bir sigorta türüdür.",
    },
    {
      question: "DASK nedir?",
      answer:
        "DASK, deprem ve deprem kaynaklı hasarları karşılayan zorunlu bir konut sigortasıdır.",
    },
    {
      question: "Neler teminata dahildir?",
      answer:
        "Sigorta türüne göre teminatlar değişiklik gösterir. Kasko, çalınma ve yanma gibi durumları; trafik sigortası, karşı tarafın hasarlarını kapsar.",
    },
    {
      question: "Trafik poliçemin talimatları nelerdir?",
      answer:
        "Trafik poliçenizdeki özel ve genel şartlar poliçe dökümanında yer almaktadır. Detaylar için bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "Trafik poliçem yurt dışında geçerli mi?",
      answer:
        "Türkiye’de düzenlenen trafik sigortaları sadece Türkiye sınırları içinde geçerlidir. Yurt dışı için yeşil kart temin edilmelidir.",
    },
    {
      question: "Poliçe ne zaman başlar?",
      answer:
        "Poliçe, ödemenizin tamamlanması ve poliçenin tarafınıza ulaştırılmasıyla birlikte başlar. Başlangıç tarihi poliçede yazmaktadır.",
    },
  ];

  return (
    <div className="sss-container">
      {/* Sol panel: sidebar + ek kutular */}
      <div className="sss-left-panel">
        <aside className="hasar-sidebar">
          <h3>Yardım</h3>
          <ul>
            <li className={currentPath === "/bize-ulasin" ? "active" : ""}>
              <Link to="/bize-ulasin">Bize Ulaşın</Link>
            </li>
            <li
              className={
                currentPath === "/sikca-sorulan-sorular" ? "active" : ""
              }
            >
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
            </li>
            <li className={currentPath === "/hasar-aninda" ? "active" : ""}>
              <Link to="/hasar-aninda">Hasar Anında</Link>
            </li>
            <li
              className={currentPath === "/sigorta-teminatlari" ? "active" : ""}
            >
              <Link to="/sigorta-teminatlari">Sigorta Teminatları</Link>
            </li>
          </ul>
        </aside>

        {/* Ek Bilgi ve PDF Alanı */}
        <div className="ek-bilgi-kutulari">
          <div className="detayli-bilgi-kutusu">
            <p>📞 Detaylı bilgi için:</p>
            <span className="tel-no">0272 214 76 96</span>
          </div>

          <div className="pdf-kutusu">
            <p className="pdf-baslik">
              <span>📄</span> Kaza Tespit Tutanağı
            </p>
            <a
              href="/files/kaza-tespit-tutanağı.pdf"
              download
              className="pdf-indir-link"
            >
              PDF Dökümanı İndir
            </a>
          </div>
        </div>
      </div>

      {/* Sağ içerik */}
      <div className="sss-content">
        <h1>Sıkça Sorulan Sorular</h1>
        <div className="faq-list">
          {faqList.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SikcaSorulanSorular;
