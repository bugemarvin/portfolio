import React, { useState, useEffect } from 'react';
import './utils/css/container.css';
import Marvin from "./utils/img/pic.png"
import Header from "./utils/sections/header";
import Skills from "./utils/sections/skills";
import Resume from "./utils/sections/resume";
import Projects from "./utils/sections/projects";
import Contacts from "./utils/sections/contact";
import CV from './utils/img/projects/Marvin_Kurland.pdf';
import { FaHome, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaTwitter, FaLinkedin, FaStackOverflow, FaEnvelope, FaYoutube, FaMedium, FaTwitch } from 'react-icons/fa';

export default function Profiler() {
        const [index, setIndex] = useState(0);
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
        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = CV;
          link.download = 'Marvin Kurland Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
        const scrollToTop = () => {
                  scroll.scrollToTop();
                };
        return (
                <div className='Container-main'>
                        <div className='Container'>
                                <div className='Profile Profile-Navigation'>
                                        <div className='Profile User-details'>
                                                <img src={Marvin} className="User-logo" alt="Marvin Kurland" />
                                                <span>Marvin Kurland</span>
                                                <h2>Software Engineer</h2>
                                                <ul className=''>
                                                        {socials[index]}
                                                </ul>
                                        </div>
                                        <ul className='Profile Menu'>
                                                <li><Link to="header" smooth={true} duration={500} offset={-100} spy={true}><FaHome />Home</Link></li>
                                                <li><Link to="skills" smooth={true} duration={500} offset={-100} spy={true}><GiSkills />Skills</Link></li>
                                                <li><Link to="resume" smooth={true} duration={500} offset={-100} spy={true}><FaUserGraduate />Resume</Link></li>
                                                <li><Link to="projects" smooth={true} duration={500} offset={-100} spy={true}><FaProjectDiagram />Projects</Link></li>
                                                <li><Link to="contacts" smooth={true} duration={500} offset={100} spy={true}><RiContactsFill />Contact</Link></li>
                                        </ul>
                                        <p>&copy; 2023 All rights reserved</p>
                                </div>
                                <div className=' Profile Profile-Info'>
                                        <Header />
                                        <Skills />
                                        <Resume />
                                        <Projects />
                                        <Contacts />
                                </div>
                        </div>
                        <button onClick={scrollToTop} className='Scroll-top'>Scroll to Top</button>
                        <button onClick={handleDownload} className='Cv-download'>Download Cv</button>

                </div>
        );
}
