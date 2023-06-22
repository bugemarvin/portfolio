import './skills.css';
import { FaPython, FaTrademark } from 'react-icons/fa';
import { 
        SiJavascript,
        SiGnubash,
        SiFlask,
        SiDjango,
        SiMysql,
        SiMongodb,
        SiHtml5,
        SiJquery,
        SiSass,
        SiGithub,
        SiGooglecloud,
        SiAmazonaws,
        SiAzuredevops,
        SiLinux,
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { RiCodeBoxFill} from 'react-icons/ri';


export default function Skills() {
        return (
                <div className='Section fCol' id="skills">
                        <h1 className='Headers fRow'><span className='Logo-form'>Skill</span></h1>
                        <div className='Contents Skills fRow'>
                                <ul className="list fCol">
                                <li><FaPython />Python</li> 
                                <li><RiCodeBoxFill />C</li>
                                <li><SiJavascript />Javascript</li>
                                <li><SiGnubash />Bash</li>
                                <li><SiFlask />Flask</li>
                                <li><SiDjango />Django</li>
                                </ul>
                                <ul className="list fCol">
                                <li><DiNodejs />Nodejs</li>
                                <li><SiMysql />MySQL</li>
                                <li><SiMongodb />MongoDB</li>
                                <li><SiHtml5 />HTML/CSS3</li>
                                <li><SiJquery />jQuery/AJAX</li>
                                <li><SiSass />Sass/Scss</li>
                                </ul>
                                <ul className="list fCol">
                                <li><SiGithub />Git/GitHub</li>
                                <li><SiAmazonaws />AWS</li>
                                <li><SiAzuredevops />Dev Ops</li>
                                <li><SiLinux />Linux</li>
                                <li><SiGooglecloud />Google Cloud</li>
                                <li><FaTrademark />Merchandising</li>
                                </ul>
                                <ul className="list fCol">
                                <li>Laundry</li>
                                <li>Data-entry</li>
                                <li>Emailing</li>
                                <li>Production</li>
                                <li>Planning</li>
                                <li>Factory management</li>
                                </ul>
                        </div>
                </div>
        );
}