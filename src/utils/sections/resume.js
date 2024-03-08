/* eslint-disable jsx-a11y/alt-text */
import './resume.css';
import Curiate from '../img/logos/curiateco_logo.jpeg';
import Modtechy from '../img/logos/modtechy_limited_logo.jpeg';
import Melian from '../img/logos/melian_dialogue_research_logo.jpeg'; 

export default function Resume () {
  return (
    <div className='Section fCol' id='resume'>
      <h1 className='Headers fRow'><span className='Logo-form'>Resume</span></h1>
      <div className='Contents Skills fRow'>
        <h1 className='Headers fRow'>Experince</h1>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src={Melian} />
            <h1 className='Headers fRow'>Melian Dialogue Research</h1>
            <span>February, 2024 - To date</span>
          </div>
          <h2 className='Headers fRow'>Position: Full-stack Software Engineer <br />Type: Contract<br />Location: London Area, United Kingdom · Remote</h2>
          <ul className='Resumes-obj'>
            <li>- Build Restful services and third-party APIs into legacy products and new solutions.</li>
            <li>- Develop and implement solutions for User Interfaces.</li>
            <li>- Produced code in programming languages to create the most effective and clean website.</li>
            <li>- Liaised with corporate personnel regarding web development and technologies, providing recommendations, insight, and support as needed.</li>
            <li>- Build Large language models for software solutions.</li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src={Curiate} />
            <h1 className='Headers fRow'>Curiate Company</h1>
            <span>October, 2023 - March 2024</span>
          </div>
          <h2 className='Headers fRow'>Position: Full-stack Software Engineer<br />Type: Internship<br />Location: United States · Remote</h2>
          <ul className='Resumes-obj'>
            <li>- Integrated Restful services and third-party APIs into legacy products and new solutions.</li>
            <li>- Assessed technical issues, developing and implementing solutions for remediation.</li>
            <li>- Produced code in programming languages to create the most effective and clean website.</li>
            <li>- Liaised with corporate personnel regarding web development and technologies, providing recommendations, insight, and support as needed.</li>
            <li>- Partnered with senior engineers to apply Agile development methodologies to prototype development tasks.</li>
            <li>- Worked with engineering teams to define project scope and understand the planning process.</li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src={Modtechy} />
            <h1 className='Headers fRow'>Modtechy</h1>
            <span>June, 2023  - August, 2023</span>
          </div>
          <h2 className='Headers fRow'>Position: Full Stack Software Engineer<br />Type: Internship<br />Location: Kenya · Remote</h2>
          <ul className='Resumes-obj'>
            <li>- Tested and determined application responsiveness for consumers, reporting performance weaknesses for remediation by development personnel.</li>
            <li>- Remained current on latest technologies and tools by reading periodicals, speaking with experts and attending conferences.</li>
            <li>- Updated web pages and navigation tools to meet client's current needs and improve usability.</li>
            <li>- Produced code in programming languages to create most effective and clean websites.</li>
            <li>- Improved coding of JavaScript and CSS to enhance user experience and functionality.</li>
            <li>- Continuously studied and improved abilities with a wide range of web technologies, design tools and programming practices.</li>
            <li>- Engaged in a cross-functional team to refactor and optimize critical code modules.</li>
            <li>- Maintained and expanded knowledge of programming languages to write high-quality object-oriented code.</li>
            <li>- Utilized industry-accepted testing methods to troubleshoot flaws.   </li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src='https://cherryfield.com/wp-content/uploads/2020/12/cf-logo.jpg' />
            <h1 className='Headers fRow'>Cherryfield Ltd | Epz Athi-River</h1>
            <span>August, 2020 - June, 2023</span>
          </div>
          <h2 className='Headers fRow'>Position: Merchandiser<br />Type: Employment<br />Location: Kenya · Onsite</h2>
          <ul className='Resumes-obj'>
            <li>- Managed factory operations from start to shipment, including production analysis and data entry</li>
            <li>- Communicated with buyers regarding production, delays, and shipment status</li>
            <li>- Conducted raw material costing, ordering, and created requisitions for production items.</li>
            <li>- Processed high volume of orders daily and consistently met production targets.</li>
            <li>- Coordinated and distributed backorders to meet customer needs.</li>
            <li>- Inspected items to identify problems and worked with supervisors or vendors to correct issues.</li>
            <li>- Observed all company safety policies and OSHA guidelines.</li>
            <li>- Operated material handling equipment to move and organize stock.</li>
            <li>- Kept inventory records accurate by conducting routine counts and complete audits of available products.</li>
            <li>- Navigated storage system to locate items for order fulfillment.</li>
            <li>- Collected and disposed of excess stock, defective items or obsolete materials.</li>
            <li>- Verified proper packaging and labeling for each shipment to promote accuracy and safety of merchandise in transit.</li>
          </ul>
          <div className='fRow Resumes-header2'>
            <h2 className='Headers fRow'>Position: Y-Analyst/Merchandising clerk<br />Type: Employment<br />Location: Kenya · Onsite</h2>
            <span>June, 2018  - August, 2020 </span>
          </div>
          <ul className='Resumes-obj'>
            <li>- Performed data entry and analyzed lay sheets for fabric consumption in production.</li>
            <li>- Followed up on KPIs and initiated actions to reach store goals and budgets.</li>
            <li>- Monitored visual material to maintain current plan-o-grams and initiate seasonal updates.</li>
            <li>- Monitored inventory levels and managed product rotations for store availability.</li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <h1 className='Headers fRow'>Kite institute | Kajiado</h1>
            <span>January, 2018 - June, 2018</span>
          </div>
          <h2 className='Headers fRow'>Position: IT Support Technician | Instructor Internship<br />Type: Internship<br />Location: Kenya · Onsite</h2>
          <ul className='Resumes-obj'>
            <li>- Provided training in computer repair/software installation and software application packages, and web development in HTML, CSS, and JavaScript.</li>
            <li>- Maintained computer systems and acted as support for end user problems.</li>
            <li>- Addressed system and user issues and identified solutions.</li>
            <li>- Prepared software or hardware evaluations, recommending improvements or upgrades.</li>
            <li>- Set up equipment based on staff needs and IT capabilities.</li>
            <li>- Supported non-technical users by quickly investigating and resolving hardware and software issues.</li>
            <li>- Removed broken or outdated hardware, replacing with new parts to achieve desired level of performance.</li>
            <li>- Recorded daily activities completed, data communications and remedial action.</li>
          </ul>
        </div>
        <h1 className='Logo-form fRow'>Education</h1>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src='https://d3t1rrq9fohtv1.cloudfront.net/media/thumbnails/images/alx-organisation-logo-20190916-00002391/f6313bbddaca8b63d28b26a7b02bc3c7.jpg' />
            <h1 className='Headers fRow'>Alx Africa | Nairobi</h1>
            <span>March 2022 - May 2023</span>
          </div>
          <h2 className='Headers fRow'>Type: Certificate in Software Engineering </h2>
          <ul className='Resumes-obj'>
            <li>A Full Stack Software Engineering Certificate at ALX Africa, with a specific focus on back-end technologies as amajor.
              This comprehensive program has provided me with a strong foundation in software development principles and practices, equipping me with the necessary tools to tackle complex challenges.
            </li>
          </ul>
        </div>
        <div className='Resumes fCol'>
          <div className='fRow Resumes-header'>
            <img className='logos' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/KCAU_logo.svg/1200px-KCAU_logo.svg.png' />
            <h1 className='Headers fRow'>KCA University | Nairobi</h1>
            <span>March 2015 - August 2018</span>
          </div>
          <h2 className='Headers fRow'>Type: Diploma in Information Technology </h2>
          <ul className='Resumes-obj'>
            <li> A diploma in Information Technology, equipping me with a diverse skill set
              in software development, database management, network administration,
              cybersecurity, systems analysis, and web technologies. This hands-on program
              prepared me to tackle real-world challenges and stay updated with emerging
              industry trends.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
