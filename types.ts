
export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  date: string;
  degree: string;
  details: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  platform: 'Medium' | 'Custom' | 'LinkedIn' | 'Twitter';
  url: string;
  category: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
