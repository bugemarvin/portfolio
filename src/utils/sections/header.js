import Banner from '../img/top_slider/banner.jpg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './header.css';

export default function Header () {
  const words = ['Hello', 'I am', 'Marvin Kurland', 'I love to code'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);
  return (
    <div className='Section fCol' id='header'>
      <img src={Banner} className='Banner' alt='Banner' />
      <div className='running-word-container'>
        <div className='running-word-animation'>
          <div className='running-word-text'>{words[currentWordIndex]}</div>
        </div>
      </div>
      <ul className='fRow Sub-Menu'>
        <li><Link to='resume' smooth duration={500} offset={-100} spy className='Sub-link'>Resume</Link></li>
        <li><Link to='projects' smooth duration={500} offset={-100} spy className='Sub-link'>Projects</Link></li>
        <li><a href='https://github.com/bugemarvin' target='_blank' rel='noopener noreferrer' className='Sub-link'>Github</a></li>
      </ul>
    </div>
  );
}
