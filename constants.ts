
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
  frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Responsive UI/UX"],
  backend: ["Node.js", "Django", "SQL (PostgreSQL)", "Redis", "API Architecture"],
  devops: ["Cloud Infrastructure", "CI/CD Pipelines", "Docker", "Git", "System Optimization"],
  emerging: ["Machine Learning Fundamentals", "LLM Integration", "Process Automation"]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Akoto Digital Solutions",
    description: "Architected and delivered scalable, secure digital solutions as a Co-Founder.",
    detailedDescription: "Designed and implemented a multi-tenant SaaS architecture. Leveraged Microservices to ensure independent scalability and implemented a robust Redis caching layer that reduced database load by 40%. Orchestrated deployment pipelines that achieved 99.9% platform availability.",
    tags: ["React", "Node.js", "Redis", "PostgreSQL", "Cloud"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    githubUrl: "#",
    liveUrl: "https://akotogrouplimited.com"
  },
  {
    id: "4",
    title: "TaskHorizon",
    description: "Advanced productivity management system with task lifecycle and progress tracking.",
    detailedDescription: "Built with Django and Python, featuring complex task prioritization, due date management, and status tracking. Designed a custom Tailwind UI for organizational efficiency and future-ready analytics.",
    tags: ["Django", "Python", "Tailwind CSS", "Productivity"],
    image: Task,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://taskhorizons.onrender.com"
  },
  {
    id: "6",
    title: "MakeupBy Rose",
    description: "Modern beauty brand booking platform with a custom React frontend and Flask backend.",
    detailedDescription: "Engineered RESTful APIs using Flask to manage service listings and booking inquiries. Built a high-conversion React frontend optimized for mobile-first social media traffic and brand identity.",
    tags: ["Flask", "React", "REST API", "Booking"],
    image: Rose,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://makeupbyrosekenya.com"
  },
  {
    id: "7",
    title: "WeDrop",
    description: "Logistics and delivery management MVP for tracking orders and operational workflows.",
    detailedDescription: "Developed order creation and tracking APIs with Flask. Built a React-based operations dashboard with role-based access control (Admin/Ops) to handle logistics at scale.",
    tags: ["Flask", "React", "Logistics", "Dashboard"],
    image: WeDrop,
    featured: true,
    githubUrl: "#",
    liveUrl: "https://wedroptech.com"
  },
  {
    id: "2",
    title: "Course Finder",
    description: "A comprehensive MERN stack platform designed for seamless academic course discovery.",
    detailedDescription: "Developed using the MERN stack (MongoDB, Express, React, Node.js). Implemented complex search algorithms and a secure user enrollment system. Optimized for high performance and mobile-first accessibility.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    image: CourseFinder,
    featured: true,
    githubUrl: "https://github.com/bugemarvin/CourseFinder",
    liveUrl: "https://medium.com/@bugemarvin/course-finder-7ad7ba9aea80"
  },
  {
    id: "9",
    title: "MindVista",
    description: "Lead Developer for an all-in-one planning system combining goals, habits, and analytics.",
    detailedDescription: "Designed scalable entity relationships for goals, focus sessions, and habits. Implemented full authentication with 2FA and profile management using Django and Tailwind.",
    tags: ["Django", "Python", "System Architecture", "2FA"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    featured: true,
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "12",
    title: "DevOps CI/CD Pipeline",
    description: "Containerization and automation research project using Docker and GitHub Actions.",
    detailedDescription: "Built robust CI/CD pipelines using GitHub Actions, containerized services with Docker, and implemented Infrastructure as Code (IaC) principles for seamless deployment monitoring.",
    tags: ["Docker", "GitHub Actions", "CI/CD", "DevOps"],
    image: Dev,
    featured: false,
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Co-Founder | Lead Software Engineer | Machine Learning Engineer",
    company: "Akoto Group Limited",
    location: "Kenya · Hybrid",
    period: "March 2023 - Present",
    description: [
      "Co-founded a software company delivering scalable and secure digital solutions, including custom web and mobile products for diverse global clients.",
      "Provided technical leadership across full-stack development, system architecture, and product strategy to ensure delivery of high-performance products.",
      "Integrated Machine Learning models to optimize business processes and enhance user experiences for client platforms.",
      "Designed and implemented API-driven, maintainable systems with robust Redis caching and SQL optimization.",
      "Managed end-to-end project lifecycles—from requirements gathering to cloud deployment—using automated CI/CD pipelines.",
      "Delivered diverse technical solutions spanning modern React frontends, Node.js backends, and cross-platform mobile engines."
    ],
    skills: ["Technical Leadership", "Machine Learning", "System Architecture", "Full-Stack", "Cloud Infrastructure", "DevOps", "Redis", "API Design", "Client Management"]
  },
  {
    id: "exp3",
    role: "Frontend Developer",
    company: "Devatop Centre for Africa Development",
    location: "Nigeria · Remote",
    period: "Nov 2024 - July 2025",
    description: [
      "Integrated frontend features using HTML, CSS, and modern JavaScript frameworks.",
      "Translated UI/UX mockups into responsive and accessible user interfaces.",
      "Maintained clean, reusable component structures for scalability.",
      "Conducted testing to ensure cross-browser compatibility and stability."
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"]
  },
  {
    id: "exp4",
    role: "Frontend Developer",
    company: "Modtechy",
    location: "Nairobi County, Kenya · Hybrid",
    period: "April 2024 - Oct 2024",
    description: [
      "Conducted extensive testing to ensure application responsiveness.",
      "Identified and reported performance bottlenecks for resolution.",
      "Updated web pages and navigation tools to improve usability.",
      "Optimized JavaScript and CSS to enhance performance and UX.",
      "Collaborated with cross-functional teams to refactor critical modules.",
      "Applied industry-standard testing methods to resolve application flaws."
    ],
    skills: ["Testing", "Optimization", "Refactoring", "UX", "Performance"]
  },
  {
    id: "exp5",
    role: "Full Stack Software Engineer",
    company: "Melian Dialogue Research",
    location: "London Area, United Kingdom · Remote",
    period: "Feb 2024 - April 2024",
    description: [
      "Integrated backend services and third-party APIs.",
      "Resolved production issues under tight launch schedules.",
      "Developed clean and efficient code across multiple languages.",
      "Collaborated closely with senior engineers during rollout phases."
    ],
    skills: ["Node.js", "API Integration", "Clean Code", "Agile"]
  },
  {
    id: "exp6",
    role: "Full Stack Software Engineer",
    company: "Curiate Company",
    location: "United States · Remote",
    period: "Oct 2023 - March 2024",
    description: [
      "Built scalable backend logic using JavaScript and SQL.",
      "Participated in Agile sprint-based delivery cycles.",
      "Led minor deployments and system improvements.",
      "Improved system stability and performance."
    ],
    skills: ["Backend", "SQL", "JavaScript", "Agile"]
  },
  {
    id: "exp7",
    role: "Merchandiser",
    company: "CherryField",
    location: "Nairobi, Kenya",
    period: "Aug 2020 - Sept 2023",
    description: [
      "Managed end-to-end factory operations and production data.",
      "Coordinated buyer communication on production and shipments.",
      "Oversaw raw material costing and requisitions.",
      "Managed backorders and ensured timely fulfillment.",
      "Conducted inventory audits and ensured compliance with safety policies."
    ],
    skills: ["Operations", "Costing", "Logistics", "Inventory Management"]
  },
  {
    id: "exp8",
    role: "Merchandising Clerk",
    company: "CherryField",
    location: "Nairobi, Kenya",
    period: "June 2018 - Aug 2020",
    description: [
      "Conducted data entry and analysis to optimize fabric consumption.",
      "Monitored KPIs and supported store performance goals.",
      "Maintained visual merchandising standards.",
      "Managed inventory levels and product rotations."
    ],
    skills: ["Data Entry", "Analysis", "KPI Monitoring", "Merchandising"]
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
    title: "Creating and Managing Environment Variables in Production, Testing, QA, and Development with .env",
    excerpt: "A deep dive into best practices for managing environment variables across the development lifecycle.",
    date: "Jan 30, 2024",
    readTime: "3 min read",
    platform: "Medium",
    url: "https://medium.com/@bugemarvin/creating-and-managing-environment-variables-in-production-testing-qa-and-development-with-env-35bc162586af",
    category: "DevOps"
  },
  {
    id: "b2",
    title: "MySQL Installation and Uninstallation Of MySQL 5.7.* in Linux Desktop Or Server",
    excerpt: "A practical guide to handling MySQL 5.7 installations and clean removals on Linux environments.",
    date: "Jan 4, 2024",
    readTime: "4 min read",
    platform: "Medium",
    url: "https://medium.com/@bugemarvin/mysql-installation-and-uninstallation-of-mysql-5-7-in-linux-desktop-or-server-2b7fb735d3fc",
    category: "Databases"
  }
];
