import React from 'react';
import { Briefcase, Award, Calendar, CheckCircle2, Cloud, Terminal, Cpu, Sparkles, Building2 } from 'lucide-react';
import { internshipsData, certificationsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>PRACTICAL EXPERIENCE &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Internships &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on industry engineering experience with AWS cloud monitoring, Terraform IaC, MERN systems, and official AI certifications from IBM and Google Cloud.
          </p>
        </div>

        {/* Section 1: Internships */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3 pb-2 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Engineering Internships</h3>
              <p className="text-xs font-mono text-slate-400">Industry experience &amp; deliverables</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internshipsData.map((item, idx) => {
              const isPurple = item.accentColor === 'purple';
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border-white/10 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Period & Type */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                        isPurple 
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                          : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                      }`}>
                        {item.type}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {item.period}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        {item.company}
                      </p>
                    </div>

                    {/* Bullet Points directly from Resume */}
                    <div className="space-y-3 pt-2">
                      {item.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Skills Tagged */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Key Competencies Applied:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-white/5 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Certifications */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 pb-2 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Professional Certifications</h3>
              <p className="text-xs font-mono text-slate-400">Industry-recognized technical credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border-white/10 flex items-start gap-5 group"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {cert.icon === 'Cpu' ? (
                    <Cpu className="w-6 h-6 text-purple-400" />
                  ) : (
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 text-cyan-300 border border-white/10">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-purple-300 font-mono">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
