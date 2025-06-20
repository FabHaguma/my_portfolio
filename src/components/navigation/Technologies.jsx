// src/components/Technologies.jsx
import React from 'react';
import './Technologies.css';

const technologiesData = [
  // Backend
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Apex Code', category: 'Backend' },
  
  // Frontend
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'ES6+', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Zustand', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  
  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Github Copilot', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Jira', category: 'Tools' },  
  // Cloud
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Supabase', category: 'Cloud' },
  { name: 'Salesforce', category: 'Cloud' },
  
  // Concepts
  { name: 'REST APIs', category: 'Concepts' },
  { name: 'Microservices', category: 'Concepts' },
  { name: 'Agile/Scrum', category: 'Concepts' },
];

// Optional: Group by category for display
const groupedTechnologies = technologiesData.reduce((acc, tech) => {
  acc[tech.category] = acc[tech.category] || [];
  acc[tech.category].push(tech.name);
  return acc;
}, {});


const Technologies = () => {
  return (
    <section id="technologies" className="page-section technologies-section">
      <h2>Technologies I Use</h2>
      <div className="tech-categories">
        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category} className="tech-category">
            <h3>{category}</h3>
            <ul className="tech-list">
              {techs.map((techName) => (
                <li key={techName} className="tech-item">
                  {/* You can add icons/logos here later */}
                  {techName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Or a simpler list if you don't want categories: */}
      {/* <ul className="tech-list simple-list">
        {technologiesData.map((tech) => (
          <li key={tech.name} className="tech-item">{tech.name}</li>
        ))}
      </ul> */}
    </section>
  );
};

export default Technologies;