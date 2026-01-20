
import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowRight, Github, Linkedin, Twitter, Download, Code2, Layers, Cpu, Globe, 
  MapPin as MapPinIcon, Calendar, Briefcase as BriefcaseIcon, Mail, Send, CheckCircle, ExternalLink, Terminal,
  Loader2, ChevronDown, Heart, MessageCircle, Share2, GraduationCap, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, BLOG_POSTS, AVATAR_URL, EDUCATION } from '../constants';
import { Project } from '../types';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-lg" />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          duration: 0.4 
        }}
        className="relative w-full max-w-5xl max-h-full bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full transition-colors hover:bg-slate-200"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30">
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            {project.title}
          </h2>
          
          <div className="space-y-8 text-slate-600 dark:text-slate-400">
            <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
              {project.description}
            </p>
            
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Technical Implementation</h4>
              <p className="leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-10">
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-bold hover:bg-black transition-all">
                  <Github size={20} /> Codebase
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                  <ExternalLink size={20} /> Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0], index: number }> = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 pb-16 last:pb-0"
    >
      {/* Timeline Line Segment */}
      <div className="absolute left-[19px] md:left-[27px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/50 via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 z-10">
        <div className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          <div className="relative w-4 h-4 md:w-6 md:h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 shadow-xl shadow-blue-500/40"></div>
        </div>
      </div>

      <div className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold mb-4 tracking-widest uppercase">
              {exp.period}
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{exp.role}</h3>
            <div className="flex items-center text-blue-600 font-bold text-lg mt-2">
              <BriefcaseIcon size={20} className="mr-3" />
              {exp.company}
            </div>
          </div>
          <div className="flex items-center text-slate-500 font-semibold px-6 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 self-start lg:self-center">
            <MapPinIcon size={18} className="mr-3" />
            {exp.location}
          </div>
        </div>

        <ul className="space-y-4 mb-10">
          {exp.description.map((desc, i) => (
            <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start text-lg leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-4 mt-3 shrink-0 opacity-50"></span>
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-800">
          {exp.skills.map(skill => (
            <span key={skill} className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl text-[11px] font-extrabold tracking-tight uppercase">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  const { allTags, tagCounts } = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    const tags = new Set<string>();
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => {
        tags.add(tag);
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return { allTags: ['All', ...Array.from(tags).sort()], tagCounts: counts };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-40 pb-40">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span>Ready for impact • Remote Friendly</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
                Engineering <br /><span className="text-blue-600">Reliable</span> Scale.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
                I'm <span className="text-slate-900 dark:text-white font-bold">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.role} focused on architecting high-performance digital ecosystems.
              </p>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <Link to="/#work" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center transition-all shadow-2xl shadow-blue-500/30 active:scale-95">
                  View Projects <ArrowRight size={22} className="ml-3" />
                </Link>
                <Link to="/#contact" className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 rounded-2xl font-bold transition-all active:scale-95">
                  Contact Me
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8 opacity-70">
                <a href={PERSONAL_INFO.github} className="hover:text-blue-600 transition-colors"><Github size={28} /></a>
                <a href={PERSONAL_INFO.linkedin} className="hover:text-blue-600 transition-colors"><Linkedin size={28} /></a>
                <a href={PERSONAL_INFO.twitter} className="hover:text-blue-600 transition-colors"><Twitter size={28} /></a>
              </div>
            </div>

            <div className="relative lg:block hidden animate-in fade-in slide-in-from-right duration-700 delay-200">
               <div className="relative z-10 w-full aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img src={AVATAR_URL} alt={PERSONAL_INFO.name} className="w-full h-full object-cover scale-105" />
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-[2.5rem] -z-0 animate-bounce duration-[4000ms]"></div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Solving Complexity <br /><span className="text-blue-600">With Purpose.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {PERSONAL_INFO.summary}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Expertise</p>
                <p className="text-slate-900 dark:text-white font-bold text-lg">Scalable APIs & Systems</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Product Focus</p>
                <p className="text-slate-900 dark:text-white font-bold text-lg">Automation & UX</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-10 rounded-[3rem] bg-blue-600 text-white flex flex-col justify-end min-h-[220px] shadow-2xl shadow-blue-500/20">
                <BriefcaseIcon size={40} className="mb-6" />
                <h3 className="font-extrabold text-2xl">API Architecture</h3>
              </div>
              <div className="p-10 rounded-[3rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-end min-h-[180px]">
                <Cpu size={40} className="text-blue-600 mb-6" />
                <h3 className="font-extrabold text-2xl dark:text-white text-slate-900">Machine Learning</h3>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-800 text-white flex flex-col justify-end min-h-[220px]">
                <Layers size={40} className="text-blue-500 mb-6" />
                <h3 className="font-extrabold text-2xl">Clean Systems</h3>
              </div>
              <div className="p-10 rounded-[3rem] bg-purple-600 text-white flex flex-col justify-end min-h-[180px] shadow-2xl shadow-purple-500/20">
                <Terminal size={40} className="mb-6" />
                <h3 className="font-extrabold text-2xl">Dev Automation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl font-medium">Equipped for the complete lifecycle of modern digital products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: 'Frontend', skills: SKILLS.frontend, icon: <Globe className="text-blue-500" /> },
            { title: 'Backend', skills: SKILLS.backend, icon: <Cpu className="text-purple-500" /> },
            { title: 'DevOps', skills: SKILLS.devops, icon: <Layers className="text-green-500" /> },
            { title: 'Emerging', skills: SKILLS.emerging, icon: <Code2 className="text-orange-500" /> },
          ].map((category, idx) => (
            <div key={idx} className="p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8">
                {category.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold border border-slate-100 dark:border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Professional Journey</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl max-w-xl font-medium">A trajectory of growth, leadership, and engineering excellence.</p>
          </div>
          <Link to="/resume" className="flex items-center text-blue-600 font-extrabold hover:text-blue-700 text-lg group">
            Download ATS CV <Download size={24} className="ml-3 transform group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceItem key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 space-y-6">
          <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-xl font-medium">Foundational training that fuels my technical approach.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] hover:border-blue-500/50 transition-all shadow-sm">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-[1.5rem] flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">{edu.degree}</h3>
                  <p className="text-blue-600 font-bold text-lg mt-2">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex items-center text-slate-500 font-bold text-sm mb-8 space-x-10">
                <div className="flex items-center"><Calendar size={16} className="mr-3" /> {edu.date}</div>
                <div className="flex items-center"><MapPinIcon size={16} className="mr-3" /> {edu.location}</div>
              </div>
              
              <ul className="space-y-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed flex items-start">
                    <span className="text-blue-500 mr-4 mt-1.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Selected Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl max-w-xl font-medium">Proven solutions delivering measurable results.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-6 py-3 rounded-2xl text-sm font-extrabold transition-all ${
                  activeFilter === tag 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' 
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tag} <span className="ml-2 opacity-40 font-bold">{tagCounts[tag]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                   <div className="flex space-x-5">
                     <span className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"><ExternalLink size={24} /></span>
                   </div>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex gap-2 mb-6">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors tracking-tight">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 flex-grow opacity-80">{project.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center text-sm font-extrabold text-blue-600 tracking-tight group-hover:text-blue-500 transition-colors">
                    <span className="relative overflow-hidden inline-block pr-1">
                       DEEP DIVE
                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                    <ArrowRight size={20} className="ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thought Leadership */}
      <section id="writing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="bg-slate-900 dark:bg-blue-600 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px] -z-0"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-10">
              <h2 className="text-5xl font-extrabold text-white tracking-tighter">Insights & <br />Engineering.</h2>
              <p className="text-slate-300 dark:text-blue-50 text-xl font-medium leading-relaxed">Thoughts on architecture, scalability, and the technical journey.</p>
              <a href={PERSONAL_INFO.medium} className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-bold hover:bg-blue-50 transition-all shadow-2xl">
                Explore Medium <ExternalLink size={20} className="ml-3" />
              </a>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map(post => (
                <a key={post.id} href={post.url} className="group bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-start mb-10">
                    <span className="px-4 py-1.5 bg-white/20 rounded-xl text-xs font-bold text-white uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-white/50 font-bold">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">{post.title}</h3>
                  <div className="flex items-center text-sm text-white/60 font-bold">
                    <Calendar size={16} className="mr-3" />
                    {post.readTime}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-12">
            <h2 className="text-6xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.95]">Let's Build <br /><span className="text-blue-600">The Future.</span></h2>
            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Discussing a project, a partnership, or a technical challenge? I'm available for strategic engineering conversations.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-[1.5rem] flex items-center justify-center shadow-sm">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Communication</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl font-extrabold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-[1.5rem] flex items-center justify-center shadow-sm">
                  <MapPinIcon size={32} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Base of Operations</p>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 md:p-20 rounded-[4rem] shadow-3xl relative">
            {formState === 'success' ? (
              <div className="text-center py-20 space-y-10 animate-in zoom-in">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">Success!</h3>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Your message is in my queue. I'll reach out within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="px-12 py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2rem] font-bold hover:bg-slate-200 transition-all">Send New Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-extrabold text-slate-700 dark:text-slate-300 ml-2 uppercase tracking-widest">Name</label>
                    <input required type="text" placeholder="Jane Doe" className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 focus:border-blue-500 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-extrabold text-slate-700 dark:text-slate-300 ml-2 uppercase tracking-widest">Email</label>
                    <input required type="email" placeholder="jane@global.com" className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 focus:border-blue-500 outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-700 dark:text-slate-300 ml-2 uppercase tracking-widest">Message</label>
                  <textarea required rows={6} placeholder="How can we collaborate?" className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] px-8 py-6 focus:border-blue-500 outline-none transition-all resize-none font-medium"></textarea>
                </div>
                <button disabled={formState === 'loading'} type="submit" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-bold flex items-center justify-center space-x-4 shadow-2xl shadow-blue-500/40 transition-all active:scale-[0.98] disabled:opacity-70 text-lg">
                  {formState === 'loading' ? <Loader2 size={28} className="animate-spin" /> : <><span>Transmit Message</span> <Send size={24} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
