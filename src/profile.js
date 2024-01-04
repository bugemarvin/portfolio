import './utils/css/container.css';
import Marvin from "./utils/img/pic.png"
import Header from "./utils/sections/header";
import About from "./utils/sections/about";
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

export default function Profiler() {
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
                                        </div>
                                        <ul className='Profile Menu'>
                                                <li><Link to="header" smooth={true} duration={500} offset={-100} spy={true}><FaHome />Home</Link></li>
                                                <li><Link to="about" smooth={true} duration={500} offset={-100} spy={true}><BsInfoSquareFill />About</Link></li>
                                                <li><Link to="skills" smooth={true} duration={500} offset={-100} spy={true}><GiSkills />Skills</Link></li>
                                                <li><Link to="resume" smooth={true} duration={500} offset={-100} spy={true}><FaUserGraduate />Resume</Link></li>
                                                <li><Link to="projects" smooth={true} duration={500} offset={-100} spy={true}><FaProjectDiagram />Projects</Link></li>
                                                <li><Link to="contacts" smooth={true} duration={500} offset={100} spy={true}><RiContactsFill />Contact</Link></li>
                                        </ul>
                                        <p>&copy; 2023 All rights reserved</p>
                                </div>
                                <div className=' Profile Profile-Info'>
                                        <Header />
                                        <About />
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
