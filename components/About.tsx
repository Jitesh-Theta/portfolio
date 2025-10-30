import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400 mb-8">About Me</h2>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 shadow-lg hover:border-amber-500/40 transition-all duration-300 space-y-6 text-slate-200 leading-relaxed">
        <p>
          Experienced IT professional with over 13.5 years in software development, specializing as a Full Stack Developer.
          Proficient in designing, developing, deploying, and maintaining N-Tier web-based applications, with a strong
          background in both front-end and back-end programming.
        </p>
        <p>
          With hands-on experience in a SAAS and PASS
          environment, I excel at meeting tight deadlines, exhibit strong leadership and problem-solving skills, and am
          committed to continual learning. A self-motivated team player with a keen attention to detail.
        </p>
      </div>
    </section>
  );
};

export default About;