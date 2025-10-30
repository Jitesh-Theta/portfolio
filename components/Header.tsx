import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/60 backdrop-blur-xl sticky top-0 z-50 border-b border-gradient-to-r from-amber-500/30 via-transparent to-cyan-500/30 shadow-lg shadow-slate-950/50">
      <div className="container mx-auto max-w-5xl px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400"></div>
          <nav className="hidden md:flex space-x-10 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-amber-300 transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-slate-300 hover:text-amber-300 transition-colors duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="text-slate-300 hover:text-amber-300 transition-colors duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#education" className="text-slate-300 hover:text-amber-300 transition-colors duration-300 relative group">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;