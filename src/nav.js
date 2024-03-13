import './utils/css/index.css';
import './utils/css/navs.css';
import { useState } from 'react';
import { FaHome, FaBars, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { Link } from 'react-scroll';

export default function Nav() {
        const [ isMenuOpen, setIsMenuOpen ] = useState(false);
        function toggle () {
                setIsMenuOpen((n) => !n);
        }
        function handleLinkClick() {
                if (isMenuOpen) {
                    toggle();
                }
        }
        return (
                <>
                        <div className="Navigation">
                                <nav>
                                        <h1><span>M</span>arvin_<span>K</span>urland</h1>
                                </nav>
                        </div>
                        <div className={`${isMenuOpen ? 'NavigationClose' : 'NavigationOpen'} Navigation__two Navigation`}>
                                <div className={isMenuOpen ? 'ContainerClose' : 'ContainerOpen'}>
                                        <button className={`${isMenuOpen ? 'BtnClose' : 'BtnOpen'} Btn`} onClick={toggle}>{isMenuOpen ? 'X' : <FaBars />}</button>
                                        <ul className={isMenuOpen ? 'MenuItemsClose' : 'MenuItemsOpen'}>
                                                <li><Link to="header" smooth={true} duration={500} offset={-100} spy={true} onClick={handleLinkClick}><span><FaHome /></span><span className='Link_navs'>Home</span></Link></li>
                                                <li><Link to="skills" smooth={true} duration={500} offset={-100} spy={true} onClick={handleLinkClick}><span><GiSkills /></span><span className='Link_navs'>Skills</span></Link></li>
                                                <li><Link to="resume" smooth={true} duration={500} offset={-100} spy={true} onClick={handleLinkClick}><span><FaUserGraduate /></span><span className='Link_navs'>Resume</span></Link></li>
                                                <li><Link to="projects" smooth={true} duration={500} offset={-100} spy={true} onClick={handleLinkClick}><span><FaProjectDiagram /></span><span className='Link_navs'>Projects</span></Link></li>
                                                <li><Link to="contacts" smooth={true} duration={500} offset={100} spy={true} onClick={handleLinkClick}><span><RiContactsFill /></span><span className='Link_navs'>Contact</span></Link></li>
                                        </ul>
                                        <p>&copy; 2023 All rights reserved</p>
                                </div>
                                <nav className={isMenuOpen ? 'NameClose' : 'NameOpen'}>
                                        <h1><span>M</span>arvin_<span>K</span>urland</h1>
                                </nav>
                        </div>
                </>
        );
}
