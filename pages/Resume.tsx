
import React from 'react';
import { ArrowLeft, Printer, Mail, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILLS } from '../constants';

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif py-12 px-4 sm:px-8">
      {/* UI Controls - Hidden during print */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden no-print">
        <Link to="/" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors font-sans">
          <ArrowLeft size={18} className="mr-2" /> Back to Site
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center shadow-lg hover:bg-blue-700 transition-all font-sans"
        >
          <Printer size={18} className="mr-2" /> Print / Save as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto bg-white p-0 sm:p-4">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-8 text-center sm:text-left">
          <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">{PERSONAL_INFO.name}</h1>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">{PERSONAL_INFO.role}</h2>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-y-2 gap-x-6 text-sm">
            <div className="flex items-center"><Mail size={14} className="mr-1.5" /> {PERSONAL_INFO.email}</div>
            <div className="flex items-center"><MapPin size={14} className="mr-1.5" /> {PERSONAL_INFO.location}</div>
            <div className="flex items-center"><Globe size={14} className="mr-1.5" /> {PERSONAL_INFO.portfolio.replace('https://', '')}</div>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 mt-3 text-sm font-sans font-bold text-slate-600">
            <div className="flex items-center gap-1"><Github size={14} /> github.com/bugemarvin</div>
            <div className="flex items-center gap-1"><Linkedin size={14} /> linkedin.com/in/marvin-kurland-29b799133</div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-3 pb-1">Professional Summary</h3>
          <p className="text-sm leading-relaxed italic">
            {PERSONAL_INFO.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Professional Experience</h3>
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="relative">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-base">{exp.role} | {exp.company}</h4>
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs text-blue-700 font-bold mb-2 uppercase tracking-wide">{exp.location}</p>
                <ul className="list-disc ml-5 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-xs leading-relaxed">{point}</li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-sans">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Technologies:</span>
                  {exp.skills.map((s, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-slate-600">{s}{idx < exp.skills.length - 1 ? ',' : ''}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-sm">{edu.degree}</h4>
                  <span className="text-xs text-slate-500">{edu.date}</span>
                </div>
                <p className="text-xs font-bold">{edu.institution} — {edu.location}</p>
                <p className="text-xs mt-1 text-slate-600 italic">{edu.details[0]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest border-b border-slate-300 mb-4 pb-1">Technical Proficiency</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <h5 className="text-[10px] font-bold uppercase mb-1 text-blue-800">Frontend</h5>
              <ul className="text-[11px] space-y-0.5">
                {SKILLS.frontend.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase mb-1 text-blue-800">Backend</h5>
              <ul className="text-[11px] space-y-0.5">
                {SKILLS.backend.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase mb-1 text-blue-800">DevOps</h5>
              <ul className="text-[11px] space-y-0.5">
                {SKILLS.devops.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold uppercase mb-1 text-blue-800">Emerging</h5>
              <ul className="text-[11px] space-y-0.5">
                {SKILLS.emerging.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-4 border-t border-slate-100 text-[10px] text-center text-slate-400 italic font-sans">
          References available upon request. Generated from marvinkurland.dev
        </footer>
      </div>
    </div>
  );
};

export default Resume;
