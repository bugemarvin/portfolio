
import { Project, Experience, BlogPost, Education } from './types';
import Me from './assets/me.png';
import WeDrop from './assets/wedrop.png';
import Task from './assets/task.png';
import Breathe from './assets/breathe.png';
import Rose from './assets/rose.png';
import Akoto from './assets/rose.png';
import CourseFinder from './assets/course.png';
import Dev from './assets/dev.png';

// Centralized avatar for Marvin
export const AVATAR_URL = Me;

export const PERSONAL_INFO = {
  name: "Marvin Kurland",
  role: "Software Engineer / Full-Stack Developer",
  location: "Nairobi, Kenya · Remote Friendly",
  email: "bugemarvin@outlook.com",
  github: "https://github.com/bugemarvin",
  linkedin: "https://www.linkedin.com/in/marvin-kurland-29b799133",
  twitter: "https://twitter.com",
  medium: "https://medium.com/@bugemarvin",
  portfolio: "https://www.marvinkurland.dev",
  summary: "I am a product-minded Software Engineer and Machine Learning enthusiast specializing in building scalable, API-driven systems. With a unique background spanning technical leadership as a Co-Founder to full-stack engineering in international environments (UK, US, Nigeria), I deliver high-performance solutions focused on clean architecture, automation, and advanced data-driven experiences using Machine Learning."
};

export const SKILLS = {
  frontend: [
    "React",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "HTML5/CSS3",
    "Responsive UI/UX"
  ],
  backend: [
    "Laravel",
    "PHP",
    "Node.js",
    "Django",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "REST APIs"
  ],
  devops: [
    "Cloud Infrastructure",
    "CI/CD Pipelines",
    "Docker",
    "Git",
    "System Optimization"
  ],
  emerging: [
    "Machine Learning Fundamentals",
    "LLM Integration",
    "Process Automation"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Akoto Digital Solutions",
    description:
      "Architected and delivered scalable, secure digital solutions as a Co-Founder.",
    detailedDescription:
      "Designed and implemented scalable web platforms using React, Laravel, Node.js, and PostgreSQL. Developed API-driven systems, authentication flows, and optimized Redis caching layers to improve system performance and reliability.",
    tags: ["React", "Laravel", "PHP", "Redis", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    githubUrl: "#",
    liveUrl: "https://akotogrouplimited.com"
  },
  {
    id: "4",
    title: "TaskHorizon",
    description:
      "Advanced productivity management system with task lifecycle and progress tracking.",
    detailedDescription:
      "Built with Django and Python, featuring task prioritization, due date management, and status tracking. Designed a custom Tailwind UI focused on productivity and responsiveness.",
    tags: ["Django", "Python", "Tailwind CSS", "Productivity"],
    image: Task,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://taskhorizons.onrender.com"
  },
  {
    id: "6",
    title: "MakeupBy Rose",
    description:
      "Modern beauty brand booking platform with a custom React frontend and Flask backend.",
    detailedDescription:
      "Built responsive frontend interfaces using React and integrated backend APIs for booking and service management.",
    tags: ["Flask", "React", "REST API", "Booking"],
    image: Rose,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://makeupbyrosekenya.com"
  },
  {
    id: "7",
    title: "WeDrop",
    description:
      "Logistics and delivery management MVP for tracking orders and operational workflows.",
    detailedDescription:
      "Developed order creation and tracking APIs with Flask and built a React-based operations dashboard with role-based access control.",
    tags: ["Flask", "React", "Logistics", "Dashboard"],
    image: WeDrop,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://wedroptech.com"
  },
  {
    id: "2",
    title: "Course Finder",
    description:
      "A comprehensive MERN stack platform designed for seamless academic course discovery.",
    detailedDescription:
      "Developed using the MERN stack with secure enrollment workflows, search functionality, and responsive interfaces.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    image: CourseFinder,
    featured: true,
    githubUrl: "https://github.com/bugemarvin/CourseFinder",
    liveUrl:
      "https://medium.com/@bugemarvin/course-finder-7ad7ba9aea80"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "CTO | Lead Software Engineer",
    company: "FinishLab",
    location: "Remote",
    period: "January 2026 - Present",
    description: [
      "Partner and technical leader responsible for defining the engineering vision and architecture of FinishLab.",
      "Architected and developed scalable frontend systems using React, TypeScript, and Vite.",
      "Designed reusable UI components and optimized frontend rendering performance.",
      "Implemented CI/CD pipelines and containerized deployment environments.",
      "Led system architecture decisions focused on maintainability, scalability, and performance."
    ],
    skills: [
      "React",
      "TypeScript",
      "Frontend Architecture",
      "CI/CD",
      "Docker",
      "Cloud Infrastructure"
    ]
  },
  {
    id: "exp2",
    role: "Co-Founder | Lead Software Engineer",
    company: "Akoto Group Limited",
    location: "Kenya · Hybrid",
    period: "March 2023 - Present",
    description: [
      "Co-founded a software company delivering scalable digital products for local and international clients.",
      "Built and maintained frontend applications using React and Tailwind CSS.",
      "Developed backend systems and REST APIs using Laravel, PHP, Node.js, and Django.",
      "Integrated authentication systems, role-based access control, and secure API communication.",
      "Designed API-driven architectures with Redis caching and SQL optimization.",
      "Managed full software development lifecycles from planning to deployment.",
      "Implemented CI/CD pipelines and deployment automation workflows."
    ],
    skills: [
      "React",
      "Laravel",
      "PHP",
      "Node.js",
      "Django",
      "Redis",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker"
    ]
  },
  {
    id: "exp3",
    role: "Frontend Developer",
    company: "Devatop Centre for Africa Development",
    location: "Nigeria · Remote",
    period: "Nov 2024 - July 2025",
    description: [
      "Integrated frontend features using HTML, CSS, and React.",
      "Translated UI/UX mockups into responsive and accessible interfaces.",
      "Maintained reusable frontend component structures.",
      "Conducted testing to ensure cross-browser compatibility and responsiveness."
    ],
    skills: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Responsive Design",
      "UI/UX"
    ]
  },
  {
    id: "exp4",
    role: "Frontend Developer",
    company: "Modtechy",
    location: "Nairobi County, Kenya · Hybrid",
    period: "April 2024 - Oct 2024",
    description: [
      "Developed responsive web interfaces using React, JavaScript, Tailwind CSS, and Laravel Blade templates.",
      "Collaborated with backend developers to integrate Laravel APIs and frontend features.",
      "Improved usability through UI optimization and frontend refactoring.",
      "Conducted testing to ensure responsiveness and cross-browser compatibility.",
      "Optimized JavaScript and CSS performance for improved user experience.",
      "Assisted in maintaining Laravel-based backend modules and resolving frontend integration issues.",
      "Participated in debugging, testing, and deployment workflows."
    ],
    skills: [
      "React",
      "Laravel",
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    institution: "African Leadership Experience",
    location: "Nairobi",
    date: "March 2022 – May 2023",
    degree: "Software Engineering",
    details: [
      "Full-stack program with a backend focus, emphasizing scalable systems, APIs, and low-level engineering."
    ]
  },
  {
    id: "edu2",
    institution: "KCA University",
    location: "Nairobi",
    date: "March 2015 – Aug 2018",
    degree: "Diploma in Information Technology",
    details: [
      "Hands-on IT training covering development, databases, networking, and system analysis."
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title:
      "Creating and Managing Environment Variables in Production, Testing, QA, and Development with .env",
    excerpt:
      "A deep dive into best practices for managing environment variables across the development lifecycle.",
    date: "Jan 30, 2024",
    readTime: "3 min read",
    platform: "Medium",
    url:
      "https://medium.com/@bugemarvin/creating-and-managing-environment-variables-in-production-testing-qa-and-development-with-env-35bc162586af",
    category: "DevOps"
  },
  {
    id: "b2",
    title:
      "MySQL Installation and Uninstallation Of MySQL 5.7.* in Linux Desktop Or Server",
    excerpt:
      "A practical guide to handling MySQL 5.7 installations and clean removals on Linux environments.",
    date: "Jan 4, 2024",
    readTime: "4 min read",
    platform: "Medium",
    url:
      "https://medium.com/@bugemarvin/mysql-installation-and-uninstallation-of-mysql-5-7-in-linux-desktop-or-server-2b7fb735d3fc",
    category: "Databases"
  }
];
