import React from 'react';

const skills = {
  "Backend": [".Net 8", ".Net Core", "C#", "ASP.NET MVC", "RESTful API", "Web API", "MS SQL", "Entity Framework", "Microservices"],
  "Frontend": ["Angular 14", "AngularJS", "Typescript", "Javascript", "HTML", "CSS", "jQuery"],
  "Cloud & DevOps": ["Microsoft Azure", "Azure DevOps", "CI/CD YAML", "GitHub Actions", "Terraform", "Bicep", "Docker", "Kubernetes"],
  "Tools & Methodologies": ["GitHub", "CodeQL", "SonarQube", "Jira", "PowerShell", "Visual Studio", "Agile", "Scrum"]
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/50 backdrop-blur-sm p-7 rounded-xl border border-amber-500/30 hover:border-amber-400/60 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
    <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-300 to-cyan-400 bg-clip-text text-transparent mb-5">{title}</h3>
    <ul className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <li key={skill} className="bg-gradient-to-r from-amber-500/20 to-cyan-500/20 backdrop-blur-sm text-amber-200 text-sm font-medium px-4 py-2 rounded-full border border-amber-400/50 hover:border-amber-300 hover:bg-amber-500/30 transition-all duration-300 cursor-default">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-400 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategory key={category} title={category} skills={skillList} />
        ))}
      </div>
    </section>
  );
};

export default Skills;