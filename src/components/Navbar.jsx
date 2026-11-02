import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3.5 shadow-lg shadow-black/30' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Abdul Malik B J Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-glow-purple transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm tracking-wider font-mono">
                  AM
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 text-base md:text-lg tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Abdul Malik B J
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
              </span>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block tracking-wide">
                AI/ML &bull; Data Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121624]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-white/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Abdul_Malik_B_J_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-md shadow-purple-600/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Abdul_Malik_B_J_Resume.pdf"
              className="p-2 rounded-lg text-slate-200 bg-white/10 hover:bg-white/20 transition-colors"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4 text-cyan-400" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-5 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-500">&rarr;</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalInfo.resumePath}
                download="Abdul_Malik_B_J_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-slate-400">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-1.5 text-xs hover:text-white"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
