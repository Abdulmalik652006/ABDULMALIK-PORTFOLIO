import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, Database, Brain, Terminal, FileCode } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-cyan-300 font-mono text-[11px] sm:text-xs">
                Open to AI/ML &amp; Data Engineering Roles
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-purple-400" /> Chennai, India
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-purple-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Hello, I am
              </h2>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block">{personalInfo.name}</span>
                <span className="text-gradient block mt-1">
                  AI/ML &amp; Data Engineer
                </span>
              </h1>
            </div>

            {/* Subtitle / Program */}
            <p className="text-base sm:text-lg font-medium text-slate-300 font-sans">
              B.Tech Artificial Intelligence &amp; Data Science &bull;{' '}
              <span className="text-cyan-300">Anna University</span> &bull;{' '}
              <span className="text-purple-300">CGPA: 8.20</span>
            </p>

            {/* Impressive short bio strictly grounded in resume */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialized in <strong className="text-slate-200">Python, SQL, data analysis, EDA, and predictive modeling</strong>. Experienced in designing machine learning pipelines with Scikit-learn &amp; Pandas, building full-stack platforms with the MERN stack, and automating cloud infrastructure with Docker and Terraform.
            </p>

            {/* Tech Quick Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Python', 'SQL', 'Scikit-Learn', 'React.js', 'MongoDB', 'Docker', 'AWS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#131724] border border-white/5 text-slate-300"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.resumePath}
                download="Abdul_Malik_B_J_Resume.pdf"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#121626]/80 hover:bg-[#181d33] border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                title="Email me"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Photo Card & Live Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Glowing Backdrop Ring */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-glow" />
              
              {/* Main Card Container */}
              <div className="relative h-full w-full rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="h-full w-full rounded-[14px] bg-[#0c0e17] overflow-hidden relative group">
                  
                  {/* Photo */}
                  <img
                    src={personalInfo.photoPath}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                    loading="eager"
                  />

                  {/* Gradient shadow overlay on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-90" />
                  
                  {/* Photo Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm">{personalInfo.name}</p>
                        <p className="text-cyan-400 text-xs font-mono">B.Tech AI &amp; DS &bull; 2023–2027</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          CGPA 8.20
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1: Predictive & ML */}
              <div className="absolute -top-4 -left-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-[#111422]/90 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-950/40 hidden sm:flex items-center gap-2.5 animate-float-slow">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Focus Area</p>
                  <p className="text-xs font-bold text-white">AI / ML &amp; Data</p>
                </div>
              </div>

              {/* Floating Badge 2: DevOps & Cloud */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#111422]/90 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-950/40 hidden sm:flex items-center gap-2.5 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Cloud &amp; DevOps</p>
                  <p className="text-xs font-bold text-white">AWS &bull; Docker &bull; IaC</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
