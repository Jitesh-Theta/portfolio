import React from 'react';
import type { EducationItem } from '../types';

const educationData: EducationItem[] = [
  {
    date: "",
    degree: "Microsoft Certified Azure Developer Associate (AZ-900)",
  },
  {
    date: "07/2011",
    degree: "PG Diploma: Advanced Computing (CDAC)",
    institution: "Sunbeam Institute - Pune, India",
  },
  {
    date: "04/2010",
    degree: "Bachelor of Engineering: Computer Science and Engineering",
    institution: "Sipna College of Engineering And Technology - Amravati, India",
  },
];

const EducationCard: React.FC<EducationItem> = ({ date, degree, institution }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/30 lg:group-hover:border lg:group-hover:border-amber-400/30"></div>
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-amber-300 sm:col-span-2" aria-label={date}>{date}</header>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-100">
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400">{degree}</div>
      </h3>
      {institution && <p className="mt-1 text-sm text-slate-300">{institution}</p>}
    </div>
  </div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400 mb-8">Qualification and Professional Development</h2>
      <div className="group/list space-y-8">
        {educationData.map((item, index) => <EducationCard key={index} {...item} />)}
      </div>
    </section>
  );
};

export default Education;