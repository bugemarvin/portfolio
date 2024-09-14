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
  SiDart,
  SiSass,
  SiGithub,
  SiGooglecloud,
  SiAmazonaws,
  SiAzuredevops,
  SiPostgresql,
  SiTypescript,
  SiMailgun,
  SiPlangrid,
  SiShopware,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiFlutter,
  SiGitlab,
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaJava } from "react-icons/fa6";
import { RiCodeBoxFill } from 'react-icons/ri';
import { VscVscodeInsiders } from "react-icons/vsc";

export default function Skills () {
  const [index, setIndex] = useState(0);
  const handler = (indexed) => {
    setIndex(indexed);
  }
  const skills = [
    [ // programming  languages
      <li><FaPython />Python</li>,
      <li><SiDart />Dart</li>,
      <li><SiTypescript />Typescript</li>,
      <li><SiJavascript />Javascript</li>,
      // <li><FaJava />Java</li>,
      // <li><RiCodeBoxFill />C</li>,
      <li><SiGnubash />Bash</li>,
    ],
    [// frameworks
      <li><SiFlask />Flask</li>,
      <li><SiDjango />Django</li>,
      <li><DiNodejs />Nodejs</li>,
      <li><SiReact />Reactjs</li>,
      <li><SiNextdotjs />Nextjs</li>,
      <li><SiTailwindcss />Tailwindcss</li>,
      <li><SiChakraui />Chakraui</li>,
      <li><SiFlutter />Flutter</li>,
      <li><SiSass />Sass/Scss</li>,
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
      <li><SiGitlab />GitLab</li>,
      <li><FaTrademark />Merchandising</li>,
      <li><VscVscodeInsiders />Vs Code</li>,
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
