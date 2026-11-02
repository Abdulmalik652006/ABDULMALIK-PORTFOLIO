import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal engineering foundations in Artificial Intelligence and Data Science, coupled with consistent academic achievement.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Node on desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#0d101a] border-2 border-cyan-400 shadow-glow-cyan z-10">
                    <GraduationCap className="w-5 h-5 text-cyan-300" />
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border-white/10 space-y-4 group">
                      
                      {/* Top Bar: Duration & Grade Badge */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.duration}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-purple-300 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40">
                          <Award className="w-3.5 h-3.5 text-purple-400" />
                          {edu.score} <span className="text-[10px] text-slate-400 font-normal">({edu.scoreDetail})</span>
                        </span>
                      </div>

                      {/* Degree / Certificate Title */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-1">
                          {edu.institution}
                        </p>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {edu.affiliation}
                        </p>
                      </div>

                      {/* Coursework & Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {edu.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
