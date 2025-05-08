import { useState } from 'react';
import './SlideShow.scss';

function SlideShow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPic = pictures.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPic - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPic - 1 ? 0 : prev + 1));
  };

  if (totalPic === 0) return null;

  return (
    <figure className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {totalPic > 1 && (
        <>
          <button className="slideshow__arrow left" onClick={goToPrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="slideshow__arrow right" onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1}/{totalPic}
          </div>
        </>
      )}
    </figure>
  );
}

export default SlideShow;