import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Download, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] relative overflow-hidden">
      
      {/* Decorative top gradient accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0d0f17] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                  AM
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Final year B.Tech Artificial Intelligence &amp; Data Science student at Anna University. Passionate about machine learning pipelines, ETL workflows, and building full-stack products.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors">About Me</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-300 transition-colors">Technical Skills</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-300 transition-colors">Featured Projects</a>
              <a href="#education" className="text-slate-400 hover:text-cyan-300 transition-colors">Education</a>
              <a href="#experience" className="text-slate-400 hover:text-cyan-300 transition-colors">Internships</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-300 transition-colors">Contact</a>
            </div>
          </div>

          {/* Resume & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Assets</h4>
            <div className="flex md:justify-end">
              <a
                href={personalInfo.resumePath}
                download="Abdul_Malik_B_J_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="flex md:justify-end pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono">
            Crafted with React, Tailwind CSS &amp; Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
