import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d101b] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">System Overview</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Technology Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#141829] border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Resume Accomplishments */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Engineering Contributions</h4>
          <div className="space-y-2.5">
            {project.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Architectural Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Core Features Implemented</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs font-medium text-slate-200 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
