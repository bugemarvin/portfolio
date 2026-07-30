import { Project, Experience, BlogPost, Education } from './types';
import Me from './assets/me.png';
import WeDrop from './assets/wedrop.png';
import Task from './assets/task.png';
import Rose from './assets/rose.png';
import CourseFinder from './assets/course.png';

// Centralized avatar for Marvin
export const AVATAR_URL = Me;

export const PERSONAL_INFO = {
  name: "Marvin Kurland",
  role: "Software Engineer / Full-Stack Developer",
  location: "Nairobi, Kenya · Remote Friendly",
  email: "bugemarvin@outlook.com",
  github: "https://github.com/bugemarvin",
  linkedin: "https://www.linkedin.com/in/marvin-kurland-29b799133",
  twitter: "https://twitter.com/bugemarvin", // TODO: replace with actual handle
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
    // TODO: replace with a local asset (e.g. import Akoto from './assets/akoto.png')
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
    // Note: liveUrl points to a write-up article, not a running demo
    liveUrl: "https://medium.com/@bugemarvin/course-finder-7ad7ba9aea80"
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
      "Partner and technical leader responsible for defining the engineering vision and architecture of FinishLab, a developer-focused SaaS platform.",
      "Architected and developed the core platform using React, TypeScript, and Vite, focusing on scalable UI systems and high-performance frontend architecture.",
      "Designed backend integrations and automation workflows supporting AI-powered developer diagnostics and productivity tooling.",
      "Implemented CI/CD pipelines, containerized deployments, and modern DevOps practices for rapid and reliable releases.",
      "Collaborated with product and growth teams to translate platform capabilities into developer-focused features.",
      "Led system architecture decisions ensuring maintainable codebases, scalable infrastructure, and performance optimization."
    ],
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "System Architecture",
      "CI/CD",
      "Docker",
      "DevOps",
      "Cloud Infrastructure"
    ]
  },

  {
    id: "exp2",
    role: "Co-Founder | Lead Software Engineer | Machine Learning Engineer",
    company: "Akoto Group Limited",
    location: "Kenya · Hybrid",
    period: "March 2023 - Present",
    description: [
      "Co-founded a software company delivering scalable and secure digital solutions.",
      "Provided technical leadership across full-stack development and system architecture.",
      "Directed product strategy, engineering execution, and delivery quality.",
      "Designed API-driven, high-performance, and maintainable software systems.",
      "Built cloud-native solutions supported by DevOps practices and CI/CD pipelines.",
      "Collaborated with stakeholders to translate business requirements into production-ready software.",
      "Focused on clean architecture, automation, and performance optimization while mentoring engineering teams."
    ],
    skills: [
      "Full-Stack Development",
      "Machine Learning",
      "System Architecture",
      "Cloud Infrastructure",
      "DevOps",
      "CI/CD",
      "REST APIs",
      "Redis",
      "PostgreSQL"
    ]
  },

  {
    id: "exp3",
    role: "Frontend Developer",
    company: "Devatop Centre for Africa Development",
    location: "Nigeria · Remote",
    period: "November 2024 - July 2025",
    description: [
      "Integrated frontend features using HTML, CSS, and modern JavaScript frameworks to improve usability.",
      "Collaborated with designers to translate UI mockups into responsive user interfaces.",
      "Maintained reusable component structures and scalable frontend architecture.",
      "Conducted regular testing to ensure cross-browser compatibility and prevent regressions."
    ],
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "Frontend Development",
      "UI/UX"
    ]
  },

  {
    id: "exp4",
    role: "Frontend Developer",
    company: "Modtechy",
    location: "Nairobi County, Kenya",
    period: "April 2024 - October 2024",
    description: [
      "Conducted extensive testing to ensure application responsiveness and identify performance issues.",
      "Updated web pages and navigation systems to improve usability and meet client requirements.",
      "Enhanced user experience by optimizing JavaScript and CSS performance.",
      "Collaborated with cross-functional teams to refactor and optimize critical application modules.",
      "Maintained high-quality object-oriented code while continuously adopting modern web technologies.",
      "Troubleshot and resolved application issues using industry-standard testing methodologies."
    ],
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Testing",
      "Performance Optimization",
      "Frontend Development"
    ]
  },

  {
    id: "exp5",
    role: "Full Stack Software Engineer",
    company: "Melian Dialogue Research",
    location: "London Area, United Kingdom",
    period: "February 2024 - April 2024",
    description: [
      "Integrated backend services and third-party APIs within complex software environments.",
      "Resolved production issues under tight launch schedules.",
      "Developed clean, maintainable code across multiple programming languages.",
      "Collaborated closely with senior engineers during rollout and deployment phases."
    ],
    skills: [
      "Full-Stack Development",
      "REST APIs",
      "Backend Development",
      "Problem Solving",
      "Deployment"
    ]
  },

  {
    id: "exp6",
    role: "Full Stack Software Engineer",
    company: "Curiate Company",
    location: "United States · Remote",
    period: "October 2023 - March 2024",
    description: [
      "Built scalable backend logic using JavaScript and SQL.",
      "Led deployment activities and system improvements.",
      "Participated in Agile sprint planning and milestone-driven software delivery."
    ],
    skills: [
      "JavaScript",
      "SQL",
      "Backend Development",
      "Agile",
      "Deployment"
    ]
  },

  {
    id: "exp7",
    role: "Merchandiser",
    company: "CherryField",
    location: "Nairobi, Kenya",
    period: "August 2020 - September 2023",
    description: [
      "Managed end-to-end factory operations, including production analysis and data management.",
      "Communicated production progress and shipment status with buyers.",
      "Oversaw raw material costing, ordering, and requisition processes.",
      "Maintained production workflows to consistently achieve manufacturing targets.",
      "Managed inventory, stock movement, audits, and backorders while ensuring compliance with safety standards."
    ],
    skills: [
      "Operations",
      "Production Management",
      "Inventory Management",
      "Supply Chain",
      "Reporting"
    ]
  },

  {
    id: "exp8",
    role: "Merchandising Clerk",
    company: "CherryField",
    location: "Nairobi, Kenya",
    period: "June 2018 - August 2020",
    description: [
      "Performed data entry and production analysis to optimize fabric consumption.",
      "Monitored KPIs and supported operational improvements.",
      "Maintained visual merchandising standards and seasonal product displays.",
      "Managed inventory levels and product rotation to maximize availability and presentation."
    ],
    skills: [
      "Data Analysis",
      "Inventory Management",
      "Reporting",
      "Visual Merchandising"
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
