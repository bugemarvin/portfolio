import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import images from '../img'

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Transition every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider">
      <TransitionGroup>
        <CSSTransition key={currentIndex} classNames="fade" timeout={500}>
          <img className="slide" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>React Image Slider</h1>
      <ImageSlider />
    </div>
  );
};

export default App;