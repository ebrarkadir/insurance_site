import React from 'react';
import './Slider.css';
import konut from '../assets/konut-sigortasi.png';
import saglik from '../assets/saglik-sigortasi.png';
import arac from '../assets/arac-sigortasi.png';

const slides = [arac, saglik, konut];

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      resetTimeout();
    };
  }, [index]);

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
