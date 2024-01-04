import Banner from '../img/top_slider/banner.jpg';
import React, { useState, useEffect } from 'react';
import './header.css';
import { FaGithub, FaTwitter, FaLinkedin, FaStackOverflow, FaEnvelope, FaYoutube, FaMedium, FaTwitch } from 'react-icons/fa';
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
        <a href='https://github.com/bugemarvin' target='_blank' rel='noopener noreferrer' className='SubLink'><FaGithub /></a>
        <a href='https://twitter.com/MarvinKurland' target='_blank' rel='noopener noreferrer' className='SubLink'><FaTwitter /></a>
        <a href='https://www.linkedin.com/in/marvin-kurland-29b799133/' target='_blank' rel='noopener noreferrer' className='SubLink'><FaLinkedin /></a>
        <a href='https://stackoverflow.com/users/16000274/marvin-kurland' target='_blank' rel='noopener noreferrer' className='SubLink'><FaStackOverflow /></a>
        <a href='mailto:bugemarvin@outlook.com' target='_blank' rel='noopener noreferrer' className='SubLink'><FaEnvelope /></a>
        <a href='https://medium.com/@bugemarvin' target='_blank' rel='noopener noreferrer' className='SubLink'><FaMedium /></a>
        <a href='https://www.youtube.com/channel/UC2QScN_Dgf_evR0JqPz0JdA' target='_blank' rel='noopener noreferrer' className='SubLink'><FaYoutube /></a>
        <a href='https://www.twitch.tv/zen_codder' target='_blank' rel='noopener noreferrer' className='SubLink'><FaTwitch /></a>
      </ul>
    </div>
  );
}
