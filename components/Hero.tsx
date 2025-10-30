import React from 'react';
import { LinkedInIcon, MailIcon, PhoneIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="mb-24 flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-2 inline-block px-4 py-1.5 rounded-full border border-amber-400/50 bg-amber-500/10 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-semibold text-amber-300 uppercase tracking-widest">Welcome</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-cyan-300 tracking-tight leading-tight mt-4">Jitesh Tambakhe</h1>
        <h2 className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent">Senior Full Stack Developer</h2>
        <p className="mt-6 max-w-xl text-slate-300 leading-relaxed text-lg font-light">
          I build robust, scalable web applications with a focus on clean code and user-centric design. Specialized in modern cloud architectures, microservices, and full-stack development.
        </p>
        <div className="mt-10 flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/jiteshtambakhe/" target="_blank" rel="noopener noreferrer" className="group relative px-5 py-2.5 rounded-lg border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 transition-all duration-300 flex items-center space-x-2 font-medium text-sm backdrop-blur-sm">
            <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:jitesh.d.tambakhe@gmail.com" className="group relative px-5 py-2.5 rounded-lg border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 transition-all duration-300 flex items-center space-x-2 font-medium text-sm backdrop-blur-sm">
            <MailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Email</span>
          </a>
          <a href="tel:+64-274159850" className="group relative px-5 py-2.5 rounded-lg border border-teal-400/40 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 hover:text-teal-200 transition-all duration-300 flex items-center space-x-2 font-medium text-sm backdrop-blur-sm">
            <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Call</span>
          </a>
        </div>
      </div>
      <div className="flex-shrink-0 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-cyan-400 to-cyan-300 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
        <div className="absolute inset-4 bg-gradient-to-tr from-amber-300 to-cyan-300 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <img
          src="../images/profile.png"
          alt="Jitesh Tambakhe"
          className="relative rounded-full w-56 h-56 object-cover border-4 border-slate-800 shadow-2xl group-hover:shadow-amber-500/30 transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
