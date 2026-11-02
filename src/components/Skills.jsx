import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Cloud, 
  CheckCircle, 
  Sparkles, 
  Search,
  BookOpen,
  GitBranch,
  Server
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'ml', label: 'AI & Data Science', icon: Cpu },
    { id: 'programming', label: 'Programming & Web', icon: Terminal },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'frameworks', label: 'Frameworks & Tools', icon: Layers },
    { id: 'devops', label: 'Cloud & DevOps', icon: Cloud },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technical toolset derived directly from my academic coursework, production internships, and engineering projects.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Scrollable Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0f121d] border border-white/10 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-600/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0f121d] border border-white/10 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid Display */}
        <div className="space-y-12">
          
          {/* 1. Machine Learning & Data Science Section */}
          {(activeTab === 'all' || activeTab === 'ml') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Machine Learning &amp; Data Science</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skillsData.mlAndData
                  .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((skill, index) => (
                    <div 
                      key={index}
                      className="glass-card glass-card-hover p-4 rounded-xl border-white/5 flex flex-col justify-between group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 group-hover:scale-125 transition-transform" />
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white">{skill.name}</p>
                      <p className="text-[11px] font-mono text-purple-300 mt-1">{skill.category}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 2. Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.programming
                  .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((prog, index) => (
                    <div 
                      key={index}
                      className="glass-card glass-card-hover p-5 rounded-xl border-white/5 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-bold text-xs">
                            &lt;/&gt;
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white">{prog.name}</h4>
                            <p className="text-xs font-mono text-slate-400">{prog.category}</p>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold">{prog.level}%</span>
                      </div>
                      
                      {/* Visual progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-1000"
                          style={{ width: `${prog.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 3. Databases */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Databases &amp; Storage</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsData.databases
                  .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((db, index) => (
                    <div 
                      key={index}
                      className="glass-card glass-card-hover p-5 rounded-xl border-white/5 space-y-2 group"
                    >
                      <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {db.name}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">{db.type}</p>
                      <p className="text-xs text-slate-400 leading-snug">{db.highlight}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 4. Frameworks & Tools */}
          {(activeTab === 'all' || activeTab === 'frameworks') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Frameworks &amp; Development Tools</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {skillsData.frameworksAndTools
                  .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((tool, index) => (
                    <div 
                      key={index}
                      className="glass-card glass-card-hover p-4 rounded-xl border-white/5 space-y-1.5"
                    >
                      <p className="text-sm font-semibold text-white">{tool.name}</p>
                      <p className="text-[11px] font-mono text-purple-300">{tool.role}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 5. Cloud & DevOps */}
          {(activeTab === 'all' || activeTab === 'devops') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">DevOps, Cloud &amp; Pipelines</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsData.devopsAndCloud
                  .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, index) => (
                    <div 
                      key={index}
                      className="glass-card glass-card-hover p-5 rounded-xl border-white/5 space-y-2"
                    >
                      <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-1">
                        <Server className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Core CS Concepts Pillar Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border-white/10 mt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 text-white font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Core Computer Science Foundations</h3>
                  <p className="text-xs text-slate-400 font-mono">Academic rigor and software design principles</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Anna University Curriculum
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {skillsData.coreConcepts.map((concept, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{concept}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

