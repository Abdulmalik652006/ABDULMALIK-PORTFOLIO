import React from 'react';
import { Award, BookOpen, Target, Sparkles, Languages, CheckCircle2, Cpu, Database, Cloud } from 'lucide-react';
import { personalInfo, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Artificial Intelligence &amp; Data Science enthusiast eager to build production-grade machine learning pipelines, scalable data architectures, and full-stack solutions.
          </p>
        </div>

        {/* Grid: Bio, Objectives, Highlights, Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden border-white/10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Summary &amp; Career Objective</h3>
                  <p className="text-xs font-mono text-cyan-400">AI/ML Engineer &bull; Data Engineer</p>
                </div>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Final year <span className="text-white font-semibold">B.Tech Artificial Intelligence &amp; Data Science</span> student at <span className="text-slate-100 font-medium">Aalim Muhammed Salegh College of Engineering, Avadi (Affiliated to Anna University)</span> with a cumulative <span className="text-cyan-300 font-bold">CGPA of 8.20</span>.
                </p>
                <p>
                  Equipped with solid hands-on experience across <span className="text-white font-medium">Python, SQL, data analysis, and data visualization</span>, seeking an entry-level <span className="text-purple-300 font-semibold">AI/ML Engineer / Data Engineer</span> role. Experienced in building automated data cleaning routines, exploratory data analysis (EDA), and machine learning model pipelines utilizing <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Pandas</span>, <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">NumPy</span>, <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Scikit-learn</span>, <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Matplotlib</span>, and <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">Power BI / Tableau</span>.
                </p>
                <p>
                  Possesses a strong foundation in statistics, ETL concepts, and database querying. A quick learner dedicated to translating mathematical machine learning models and efficient data pipelines into scalable business outcomes.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>End-to-End Data Pipelines (ETL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Supervised &amp; Unsupervised ML Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-Stack Development (MERN Stack)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cloud &amp; DevOps (AWS, Docker, IaC)</span>
                </div>
              </div>

            </div>

            {/* Languages Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Languages Known</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languagesData.map((item) => (
                  <div 
                    key={item.language} 
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-300 border border-white/10">
                      {item.flag}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.language}</p>
                      <p className="text-[11px] text-slate-400">{item.proficiency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Highlights & Metrics Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card rounded-2xl p-6 border-white/10 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                Academic &amp; Professional Highlights
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {personalInfo.about.highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-[#0e111c] border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1 group"
                  >
                    <p className="text-xs font-mono text-slate-400 mb-1">{h.label}</p>
                    <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                      {h.value}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Experience Badge Preview */}
            <div className="glass-card rounded-2xl p-6 border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Cloud className="w-4 h-4 text-cyan-400" />
                Industry Exposure
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">HTGE Technologies Pvt. Ltd.</p>
                    <p className="text-xs text-purple-300 font-mono">DevOps Intern &bull; Jul 2025 - Aug 2025</p>
                    <p className="text-xs text-slate-400 mt-1">AWS Cloud monitoring (EC2, S3), Docker &amp; Terraform (IaC).</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/20 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">AdroIT Technologies Innovative Solutions</p>
                    <p className="text-xs text-cyan-300 font-mono">Virtual Internship &bull; Dec 2025 - Feb 2026</p>
                    <p className="text-xs text-slate-400 mt-1">Project Management Tool with React.js, Express.js, Node.js &amp; Tailwind CSS.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
