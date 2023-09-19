import './slider.css';
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change images every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="image-slider">
      <div className="slider-image">
        <img className="images" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default ImageSlider;
