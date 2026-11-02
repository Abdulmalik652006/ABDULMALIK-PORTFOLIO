import React from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07080d] text-slate-100 overflow-x-hidden selection:bg-purple-500/30 selection:text-cyan-300">
      {/* Background Animated Gradient Mesh & Pattern */}
      <BackgroundGlow />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Education */}
        <Education />

        {/* Section 6: Internships & Certifications */}
        <Experience />

        {/* Section 7: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

