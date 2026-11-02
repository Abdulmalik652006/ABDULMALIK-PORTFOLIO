import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient gradient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[35%] right-[-15%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] md:w-[750px] md:h-[750px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Subtle modern grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      
      {/* Vignette effect to keep content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,8,13,0.7)_100%)]" />
    </div>
  );
}

