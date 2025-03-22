import React from 'react';
import './Slider.css';

// Masaüstü görselleri
import konut from '../assets/konut-sigortasi.png';
import saglik from '../assets/saglik-sigortasi.png';
import arac from '../assets/arac-sigortasi.png';

// Mobil görseller
import konutMobile from '../assets/konut-mobile.png';
import saglikMobile from '../assets/saglik-mobile.png';
import aracMobile from '../assets/arac-mobile.png';

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  const timeoutRef = React.useRef(null);

  // Ekran boyutunu takip et
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slider döngüsü
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => resetTimeout();
  }, [index]);

  // Görsel kaynakları
  const desktopSlides = [arac, saglik, konut];
  const mobileSlides = [aracMobile, saglikMobile, konutMobile];

  const slides = isMobile ? mobileSlides : desktopSlides;

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <img src={slides[index]} alt="slider" className="slider-image" />
      <button className="arrow left" onClick={prevSlide}>‹</button>
      <button className="arrow right" onClick={nextSlide}>›</button>

      <div className="dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
