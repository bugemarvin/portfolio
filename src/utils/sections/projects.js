import './projects.css';
import ImageSlider from '../components/slider';
import image from '../img/projects/course_finder/images.png';
import image1 from '../img/projects/course_finder/images1.png';
import image2 from '../img/projects/course_finder/images2.png';
import image3 from '../img/projects/course_finder/images3.png';
import image4 from '../img/projects/course_finder/images4.png';
import image5 from '../img/projects/course_finder/images5.png';
import image6 from '../img/projects/course_finder/images6.png';


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

return (
    <div className='Section fCol' id='projects'>
      <h1 className='Headers fRow'><span className='Logo-form'>Projects</span></h1>
      <div className='Contents Skill fCol'>
        <div className='Contain fRow'>
          <ImageSlider images={images}/>
          <div className='Description fCol'>
            <h2 className='Titles'>Course finder</h2>
            <p className="Details">Course Finder is a web application that allows users to search for free online courses. It is built with React, Express, MongoDB, BullMQ, Redis, Natural and Puppeteer. It consists of a React frontend and a RESTful API backend. The backend is built with Express and MongoDB. It uses BullMQ and Redis to handle background processes, including sending welcome messages to users. Puppeteer is used to scrape data from the online course websites including Udemy, Udacity and Cousera. All parts of the application are containerized using Docker for easy deployment and scaling.</p>
            <p className="Details Staks">React, Express, MongoDB, BullMQ, Redis, Natural, Puppeteer</p>
            <ul class="fRow Sub-Menu Staks">
              <li>
                <a href="https://coursefinder.marvinkurland.tech" target="_blank" rel="noopener noreferrer" class="Sub-link">Live Demo</a>
              </li>
              <li>
                <a href="https://github.com/ngugimuchangi/CourseFinder" target="_blank" rel="noopener noreferrer" class="Sub-link">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
