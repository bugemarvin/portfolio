
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <div className="w-5 h-5 text-white flex items-center justify-center font-bold">M</div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MarvinKurland<span className="text-blue-600">.</span></span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Engineering high-performance digital solutions with a focus on clean architecture, automation, and API-driven scalability.
            </p>
            <div className="flex space-x-4">
              <a href={PERSONAL_INFO.github} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href={PERSONAL_INFO.linkedin} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <a href={PERSONAL_INFO.twitter} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg hover:text-blue-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/#experience" className="hover:text-blue-600 transition-colors">Experience</Link></li>
              <li><Link to="/#work" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link to="/#writing" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><Link to="/#contact" className="hover:text-blue-600 transition-colors">Contact Me</Link></li>
              <li><Link to="/resume" className="hover:text-blue-600 transition-colors flex items-center">Download ATS CV <ExternalLink size={14} className="ml-1" /></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Marvin Kurland. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
