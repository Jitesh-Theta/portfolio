import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 font-sans leading-relaxed relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <Header />
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-20 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;