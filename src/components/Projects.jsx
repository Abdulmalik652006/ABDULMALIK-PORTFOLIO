import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  BrainCircuit, 
  Terminal, 
  Code
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Flagship systems engineered with machine learning intelligence, full-stack architectures, and modern developer tooling.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={project.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-white/10 relative overflow-hidden group"
              >
                {/* Decorative background glow */}
                <div 
                  className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
                    isFirst ? 'bg-purple-600' : 'bg-cyan-500'
                  }`} 
                />

                <div className="space-y-6 relative z-10">
                  
                  {/* Top Bar: Badges & Links */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                        isFirst 
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                          : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                      }`}>
                        {project.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-slate-400 border border-white/10">
                        {project.status}
                      </span>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-purple-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Overview Paragraph */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Key Highlights from Resume */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Key Resume Deliverables:
                    </p>
                    {project.bulletPoints.slice(0, 2).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isFirst ? 'text-purple-400' : 'text-cyan-400'}`} />
                        <span className="line-clamp-3">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#141828] border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-3 relative z-10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>View Architecture &amp; Details</span>
                    <span>&rarr;</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

