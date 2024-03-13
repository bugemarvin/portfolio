import Banner from '../img/top_slider/me.png';
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from 'react';
import './header.css';
import { FaGithub, FaTwitter, FaLinkedin, FaStackOverflow, FaEnvelope, FaYoutube, FaMedium, FaTwitch } from 'react-icons/fa';
export default function Header () {
  const [index, setIndex] = useState(0);
  const handler = (indexed) => {
    setIndex(indexed);
  }
  const socials = [<a href='https://github.com/bugemarvin' target='_blank' rel='noopener noreferrer' className='SubLink'><FaGithub /></a>,
  <a href='https://twitter.com/MarvinKurland' target='_blank' rel='noopener noreferrer' className='SubLink'><FaTwitter /></a>,
  <a href='https://www.linkedin.com/in/marvin-kurland-29b799133/' target='_blank' rel='noopener noreferrer' className='SubLink'><FaLinkedin /></a>,
  <a href='https://stackoverflow.com/users/16000274/marvin-kurland' target='_blank' rel='noopener noreferrer' className='SubLink'><FaStackOverflow /></a>,
  <a href='mailto:bugemarvin@outlook.com' target='_blank' rel='noopener noreferrer' className='SubLink'><FaEnvelope /></a>,
  <a href='https://medium.com/@bugemarvin' target='_blank' rel='noopener noreferrer' className='SubLink'><FaMedium /></a>,
  <a href='https://www.youtube.com/channel/UC2QScN_Dgf_evR0JqPz0JdA' target='_blank' rel='noopener noreferrer' className='SubLink'><FaYoutube /></a>,
  <a href='https://www.twitch.tv/zen_codder' target='_blank' rel='noopener noreferrer' className='SubLink'><FaTwitch /></a>]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % socials.length);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div className='Section fCol' id='header'>
      <div className='Banner fRow'>
        <div className='fRow Banner__data'>
          <img src={Banner} alt='Marvin Buge' className='Banner__img' />
          <div className='Banner__text'>
            <TypeAnimation
              cursor={false}
              sequence={
                ['Hey there, welcome',
                1000,
                ]
              }
              wrapper='h3'
            />
            <TypeAnimation
              cursor={false}
              sequence={
                ['',
                2000,
                'I am Marvin Buge',
                500,
                'I am Marvin Kurland'
                ]
              }
              wrapper='h3'
            />
            <TypeAnimation
            cursor={false}
            sequence={[
              '',
              4500,
              'A Full-Stack Software Developer',
              500,
              'A Full-Stack Software Engineer',
              6000
            ]}
            wrapper='h3'
            />
            <TypeAnimation
              sequence={[
                '',
                8500,
                'A Tech Lover',
                500,
                'A Tech Expert',
                500,
                'A Tech Nerd',
                500,
                'A Tech Introvert',
                500,
                'A Tech Enthusiast',
              ]}
              wrapper='h3'
              cursor={false}
            />
            <TypeAnimation
              sequence={[
                '',
                14500,
                'Please feel free to reach me out.',
              ]}
              wrapper='h3'
              cursor={false}
            />
            <TypeAnimation
              sequence={[
                '',
                17500,
                'In case you are intrested in collaboration.',
                500,
                'In case you are intrested in saying \u{1F44B}.',
              ]}
              wrapper='h3'
              cursor={true}
            />
          </div>
        </div>
        <ul className='Socials fCol'>
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
    </div>
  );
}
