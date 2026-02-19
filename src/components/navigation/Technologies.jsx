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
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'ES6+', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Zustand', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  
  // Database
  { name: 'SQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },

  // Dev Tools
  { name: 'Git & GitHub', category: 'Dev Tools' },
  { name: 'Docker', category: 'Dev Tools' },
  { name: 'Postman', category: 'Dev Tools' },
  { name: 'Figma', category: 'Dev Tools' },
  { name: 'VS Code', category: 'Dev Tools' },
  { name: 'IntelliJ IDEA', category: 'Dev Tools' },

  // AI Tools
  { name: 'ChatGPT', category: 'AI Tools' },
  { name: 'Codex', category: 'AI Tools' },
  { name: 'Claude Code', category: 'AI Tools' },
  { name: 'Github Copilot', category: 'AI Tools' },

  // Cloud
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Supabase', category: 'Cloud' },
  { name: 'Salesforce', category: 'Cloud' },
  { name: 'Firebase ', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  
  // Concepts
  { name: 'REST APIs', category: 'Concepts' },
  { name: 'OOP', category: 'Concepts' },
  { name: 'CI/CD', category: 'Concepts' },
  { name: 'Microservices', category: 'Concepts' },
  { name: 'Agile/Scrum', category: 'Concepts' },
  { name: 'DevOps', category: 'Concepts' },

  // Project Management
  { name: 'Microsoft Teams', category: 'Project Management & Collaboration' },
  { name: 'Jira', category: 'Project Management & Collaboration' },
  { name: 'Asana', category: 'Project Management & Collaboration' },
  { name: 'Slack', category: 'Project Management & Collaboration' },
  { name: 'Trello', category: 'Project Management & Collaboration' },
  { name: 'Notion', category: 'Project Management & Collaboration' },

  // Automation & Office Suites
  { name: 'Zapier', category: 'Automation & Office Suites' },
  { name: 'Make', category: 'Automation & Office Suites' },
  { name: 'Microsoft Office', category: 'Automation & Office Suites' },
  { name: 'Google Workspace', category: 'Automation & Office Suites' },

  // Business Intelligence & Analytics
  { name: 'Tableau/Power BI', category: 'Business Intelligence & Analytics' },
  { name: 'Google Analytics', category: 'Business Intelligence & Analytics' },
  { name: 'Jupyter Notebooks', category: 'Business Intelligence & Analytics' },

  // Productivity
  // { name: 'Jira', category: 'Productivity' },
  // { name: 'Asana', category: 'Productivity' },
  // { name: 'Zapier', category: 'Productivity' },
  // { name: 'Slack', category: 'Productivity' },
  // { name: 'Tableau/Power BI', category: 'Productivity' },
  // { name: 'Microsoft Office & Teams', category: 'Productivity' },
  // { name: 'Google Workspace & Analytics', category: 'Productivity' },

  
  
  
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