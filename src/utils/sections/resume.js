/* eslint-disable jsx-a11y/alt-text */
import './resume.css';
import { Experince } from '../data/resume';

export default function Resume () {
  return (
    <div className='Section fCol' id='resume'>
      <h1 className='Headers fRow'><span className='Logo-form'>Resume</span></h1>
      <div className='Contents Skills fRow'>
        <h1 className='Headers fRow'>Experince</h1>
        {Experince.map((exp, index) => (
           <div className='Resumes fCol' key={index}>
             <div className='fRow Resumes-header'>
               <img className='logos' src={exp.logo} />
               <h1 className='Headers fRow'>{exp.company}</h1>
               <span>{exp.date}</span>
             </div>
             <h2 className='Headers fRow'>Position: {exp.position}<br />Location: {exp.location}</h2>
             <ul className='Resumes-obj'>
               {exp.experience.map((exp, index) => (
                  <li key={index}>
                    {exp}
                  </li>
                ))}
             </ul>
           </div>
         ))}
        <h1 className='Headers fRow'><span className='Logo-form'>Education</span></h1>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src='https://d3t1rrq9fohtv1.cloudfront.net/media/thumbnails/images/alx-organisation-logo-20190916-00002391/f6313bbddaca8b63d28b26a7b02bc3c7.jpg'
            />
            <h1 className='Headers fRow'>Alx Africa | Nairobi</h1>
            <span>March 2022 - May 2023</span>
          </div>
          <h2 className='Headers fRow'>Type: Software Engineering</h2>
          <ul className='Resumes-obj'>
            <li>
              A Full Stack Software Engineering Certificate at ALX Africa, with a specific focus on back-end technologies as amajor. This comprehensive program has provided me
              with a strong foundation in software development principles and practices, equipping me with the necessary tools to tackle complex challenges.
            </li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/KCAU_logo.svg/1200px-KCAU_logo.svg.png' />
            <h1 className='Headers fRow'>KCA University | Nairobi</h1>
            <span>March 2015 - August 2018</span>
          </div>
          <h2 className='Headers fRow'>Type: Information Technology</h2>
          <ul className='Resumes-obj'>
            <li>
              A diploma in Information Technology, equipping me with a diverse skill set in software development, database management, network administration, cybersecurity, systems
              analysis, and web technologies. This hands-on program prepared me to tackle real-world challenges and stay updated with emerging industry trends.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
