import React, { useState } from 'react';
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
  SiPostgresql,
  SiPhp,
  SiLaravel,
  SiSpreadshirt,
  SiMailgun,
  SiPlangrid,
  SiShopware
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { RiCodeBoxFill } from 'react-icons/ri';

export default function Skills () {
  const [index, setIndex] = useState(0);
  const handler = (indexed) => {
    setIndex(indexed);
  }
  const skills = [
    [ // programming  languages
      <li><FaPython />Python</li>,
      <li><RiCodeBoxFill />C</li>,
      <li><SiJavascript />Javascript</li>,
      <li><SiGnubash />Bash</li>,
      <li><SiHtml5 />HTML/CSS3</li>,
      <li><SiJquery />jQuery/AJAX</li>,
      <li><SiSass />Sass/Scss</li>,
      <li><SiPhp/>PHP</li>
    ],
    [// frameworks
      <li><SiFlask />Flask</li>,
      <li><SiDjango />Django</li>,
      <li><DiNodejs />Nodejs</li>,
      <li><SiLaravel />Laravel</li>
    ],
    [ // databases
      <li><SiMysql />MySQL</li>,
      <li><SiMongodb />MongoDB</li>,
      <li><SiPostgresql />PostgreSQl</li>,
    ],
    [// cloud
      <li><SiAmazonaws />AWS</li>,
      <li><SiGooglecloud />Google Cloud</li>,
      <li><SiAzuredevops />Azure</li>,
      
    ],
    [// others
      <li><SiGithub />Git/GitHub</li>,
      <li><FaTrademark />Merchandising</li>,
      <li><SiSpreadshirt />Data-entry</li>,
      <li><SiMailgun />Emailing</li>,
      <li><SiPlangrid />Production</li>,
      <li><SiShopware />Factory management</li>
    ]
  ];
  const isActive = (idx) => index === idx ? 'menu__link active' : 'menu__link';
  return (
    <div className='Section fCol' id='skills'>
      <h1 className='Headers fRow'><span className='Logo-form'>Skill</span></h1>
      <div className='Contents__menu fRow'>
        <button className={isActive(0)} onClick={() => handler(0)}>Stacks</button>
        <button className={isActive(1)} onClick={() => handler(1)}>FrameWorks</button>
        <button className={isActive(2)} onClick={() => handler(2)}>Database</button>
        <button className={isActive(3)} onClick={() => handler(3)}>Cloud</button>
        <button className={isActive(4)} onClick={() => handler(4)}>Other</button>
      </div>
      <div className='Contents Skills fRow'>
        <ul className='list fCol'>
          {skills[index]}
        </ul>
      </div>
    </div>
  );
}
