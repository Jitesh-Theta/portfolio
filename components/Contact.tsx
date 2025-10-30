import React from 'react';
import { LinkedInIcon, MailIcon, PhoneIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="text-center py-16 border-t border-amber-500/20 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400 mb-6">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-slate-300 mb-10 text-lg leading-relaxed">
        I'm currently open to new opportunities. Feel free to reach out via email or connect with me on LinkedIn.
        References are available upon request.
      </p>
      <div className="flex justify-center items-center space-x-10 mb-12">
        <a href="https://www.linkedin.com/in/jiteshtambakhe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-amber-400 transition-all duration-300 hover:scale-125 group">
          <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-400/30 group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all duration-300">
            <LinkedInIcon className="w-8 h-8" />
          </div>
        </a>
        <a href="mailto:jitesh.d.tambakhe@gmail.com" aria-label="Email" className="text-slate-300 hover:text-amber-400 transition-all duration-300 hover:scale-125 group">
          <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-400/30 group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all duration-300">
            <MailIcon className="w-8 h-8" />
          </div>
        </a>
        <a href="tel:+64-274159850" aria-label="Phone" className="text-slate-300 hover:text-amber-400 transition-all duration-300 hover:scale-125 group">
          <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-400/30 group-hover:border-amber-400 group-hover:bg-amber-500/30 transition-all duration-300">
            <PhoneIcon className="w-8 h-8" />
          </div>
        </a>
      </div>
      <p className="text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Jitesh Tambakhe. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Contact;