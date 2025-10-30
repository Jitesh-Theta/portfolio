import React from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    date: "05/2023 - Present",
    title: "Senior Consultant",
    company: "Theta - Auckland",
    description: "Technology consultancy helping organizations transform their businesses with intelligent, innovative solutions. Working on a large logistics domain project for the client Mainfreight.",
    details: [
      "Developing new features in .NET 8 and Angular.",
      "Creating and managing Azure Release build and release pipeline (CI-CD).",
      "Managing microservices and contributing to migration to Azure.",
      "Improving project security (OWASP) and performing code reviews."
    ]
  },
  {
    date: "04/2022 - 05/2023",
    title: "Lead Product Software Engineer",
    company: "Wolters Kluwer - Pune, India",
    description: "Led a team on a Dutch application for tax calculation, serving customers in over 180 countries.",
    details: [
      "Led a team of 3 developers and 2 automation testers.",
      "Developed new features in .NET 6 and Angular.",
      "Managed bug fixing across Dev, Test, UAT, and Production environments.",
      "Utilized Agile Process, Sprint Planning, and retrospections."
    ]
  },
   {
    date: "02/2017 - 02/2022",
    title: "Associate Software Engineer",
    company: "Lumedx Healthcare - Pune, India",
    description: "Worked on HealthView Analytics Manager, a cloud-based solution for cardiovascular data intelligence, serving over 650 hospitals.",
    details: [
      "Developing new features in .NET Web API and AngularJS.",
      "Worked on pipelines to create resources on Azure using PowerShell.",
      "Interacted with Product Managers to analyze project specifications.",
      "Established system design documents for new requirements."
    ]
  },
   {
    date: "02/2015 - 02/2017",
    title: "Software Engineer",
    company: "Cybage Software's Pvt. Ltd - Pune, India",
    description: "Worked on Symantec Control Compliance Suite (CCS) to automate key IT risk and compliance management tasks.",
    details: [
      "Developed desktop Windows tools in C# .Net.",
      "Managed accountability of Windows and Unix patches.",
      "Performed peer code-reviews and assisted team members.",
      "Reviewed customer cases and checked development for the Windows platform."
    ]
  },
   {
    date: "01/2012 - 01/2015",
    title: "Software Engineer",
    company: "Visulon Technology Pvt. Ltd - Pune, India",
    description: "Developed Digital Workbook and Assortment, a B2B application for Apparel, Sports, and Fashion brands.",
    details: [
      "Developed web applications in C#.Net framework, jQuery and JavaScript.",
      "Performed manual deployment and unit testing.",
      "Handled bug fixing in UAT and Production environments.",
      "Contributed to planning, design, and implementation of specifications."
    ]
  }
];

const ExperienceCard: React.FC<ExperienceItem> = ({ date, title, company, description, details }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/30 lg:group-hover:border lg:group-hover:border-amber-400/30"></div>
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-amber-300 sm:col-span-2" aria-label={date}>{date}</header>
    <div className="z-10 sm:col-span-6 space-y-3">
      <h3 className="font-medium leading-snug text-slate-100">
        <div>
          <span className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400">{title}</span> <span className="text-slate-400">·</span> <span className="text-cyan-300">{company}</span>
        </div>
      </h3>
      <p className="text-sm leading-normal text-slate-300">{description}</p>
      <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-300 ml-2">
        {details.map((detail, index) => <li key={index}>{detail}</li>)}
      </ul>
    </div>
  </div>
);


const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400 mb-8">Experience</h2>
      <div className="group/list space-y-12">
        {experienceData.map((item, index) => <ExperienceCard key={index} {...item} />)}
      </div>
    </section>
  );
};

export default Experience;