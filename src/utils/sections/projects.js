import './projects.css';
import ImageSlider from '../components/slider';
import image from '../img/projects/course_finder/images.png';
import image1 from '../img/projects/course_finder/images1.png';
import image2 from '../img/projects/course_finder/images2.png';
import image3 from '../img/projects/course_finder/images3.png';
import image4 from '../img/projects/course_finder/images4.png';
import image5 from '../img/projects/course_finder/images5.png';
import image6 from '../img/projects/course_finder/images6.png';
import exploreHome from '../img/projects/explorer/home.png';
import image_p from '../img/projects/protfolio/image.png';
import image_p1 from '../img/projects/protfolio/image_1.png';
import image_p2 from '../img/projects/protfolio/image_2.png';
import image_p3 from '../img/projects/protfolio/image_3.png';

export default function Projects () {

  const images = [
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  const exporer = [
    exploreHome
  ];
  const protfolio = [
    image_p,
    image_p1,
    image_p2,
    image_p3,
  ];

return (
    <div className='Section fCol' id='projects'>
      <h1 className='Headers fRow'><span className='Logo-form'>Projects</span></h1>
      <div className='Contents Skill fCol'>
        <div className='Contain fRow'>
          <ImageSlider images={images}/>
          <div className='Description fCol'>
            <h2 className='Titles'>Course finder</h2>
            <p className="Details">Course Finder is a web application that allows users to search for free online courses. It is built with React, Express, MongoDB, BullMQ, Redis, Natural and Puppeteer. It consists of a React frontend and a RESTful API backend. The backend is built with Express and MongoDB. It uses BullMQ and Redis to handle background processes, including sending welcome messages to users. Puppeteer is used to scrape data from the online course websites including Udemy, Udacity and Cousera. All parts of the application are containerized using Docker for easy deployment and scaling.</p>
            <p className="Details Staks">React, Axios, AWS, Express, MongoDB, BullMQ, Redis, Natural, Puppeteer, Nginx</p>
            <ul class="fRow Sub-Menu Staks">
              <li>
                <a href="https://www.coursefinder.marvinbuge.tech" target="_blank" rel="noopener noreferrer" class="Sub-link">Live Demo</a>
              </li>
              <li>
                <a href="https://www.coursefinder.api.marvinbuge.tech/categories" target="_blank" rel="noopener noreferrer" class="Sub-link">API's</a>
              </li>
              <li>
                <a href="https://www.coursefinder.api.docs.marvinbuge.tech" target="_blank" rel="noopener noreferrer" class="Sub-link">API's Docs</a>
              </li>
              <li>
                <a href="https://github.com/bugemarvin/CourseFinder" target="_blank" rel="noopener noreferrer" class="Sub-link">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='Contain fRow'>
          <ImageSlider images={exporer}/>
          <div className='Description fCol'>
            <h2 className='Titles'>Explorer</h2>
            <p className="Details">Explorer is a web application for travelers to meet and share their traveling experiences while visiting places around the globe and have the feel a sense of their own community members and presence of self belonging.</p>
            <p className="Details Staks">LAMP Stack, Python, Django, AWS, Scss, HTML/CSS</p>
            <ul class="fRow Sub-Menu Staks">
              <li>
                <a href="https://explorer-tau-liart.vercel.app" target="_blank" rel="noopener noreferrer" class="Sub-link">Live Demo</a>
              </li>
              <li>
                <a href="https://github.com/bugemarvin/explorer" target="_blank" rel="noopener noreferrer" class="Sub-link">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='Contain fRow'>
           <ImageSlider images={protfolio}/>
           <div className='Description fCol'>
             <h2 className='Titles'>Portfolio</h2>
             <p className="Details">This project showcases my skills, projects, and professional journey in a sleek and interactive manner. With a modern design and smooth navigation, this website provides visitors with a comprehensive overview of my expertise and achievements. </p>
             <p className="Details Staks">React, AWS, Redux, Pm2, Nginx</p>
             <ul class="fRow Sub-Menu Staks">
               <li>
                 <a href="https://portfolio.marvinbuge.tech" target="_blank" rel="noopener noreferrer" class="Sub-link">Live Demo</a>
               </li>
               <li>
                 <a href="https://github.com/bugemarvin/portfolio" target="_blank" rel="noopener noreferrer" class="Sub-link">Github</a>
               </li>
             </ul>
           </div>
          </div>
      </div>
    </div>
  );
}
