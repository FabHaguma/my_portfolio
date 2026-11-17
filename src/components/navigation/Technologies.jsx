import './Technologies.css';

const technologyGroups = [
  { label: 'Backend', tools: ['Java', 'Spring Boot', 'Python', 'Node.js', 'Express.js', 'Apex Code'] },
  { label: 'Frontend', tools: ['JavaScript', 'ES6+', 'Next.js', 'React', 'Zustand', 'Tailwind CSS'] },
  { label: 'Databases', tools: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'] },
  { label: 'Cloud & platforms', tools: ['AWS', 'Azure', 'GCP', 'Supabase', 'Salesforce', 'Firebase', 'Kubernetes'] },
  { label: 'Development tools', tools: ['Git & GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'IntelliJ IDEA'] },
  { label: 'Engineering practices', tools: ['REST APIs', 'OOP', 'CI/CD', 'Microservices', 'Agile/Scrum', 'DevOps'] },
  { label: 'AI tools', tools: ['ChatGPT', 'Codex', 'Claude Code', 'GitHub Copilot'] },
  { label: 'Project management & collaboration', tools: ['Microsoft Teams', 'Jira', 'Asana', 'Slack', 'Trello', 'Notion'] },
  { label: 'Automation & office suites', tools: ['Zapier', 'Make', 'Microsoft Office', 'Google Workspace'] },
  { label: 'Business intelligence & analytics', tools: ['Tableau', 'Power BI', 'Google Analytics', 'Jupyter Notebooks'] },
];

export default function Technologies() {
  const [primary, additional] = [technologyGroups.slice(0, 6), technologyGroups.slice(6)];

  return (
    <section id="technologies" className="toolkit shell" tabIndex={-1} aria-labelledby="toolkit-title">
      <h2 className="section-title" id="toolkit-title">My toolkit</h2>
      <div className="technology-grid">
        {primary.map(({ label, tools }) => (
          <div key={label} className="technology-group">
            <h3>{label}</h3>
            <p>{tools.join(' · ')}</p>
          </div>
        ))}
      </div>
      <details className="more-technologies">
        <summary>More tools I use</summary>
        <div className="technology-grid">
          {additional.map(({ label, tools }) => (
            <div key={label} className="technology-group">
              <h3>{label}</h3>
              <p>{tools.join(' · ')}</p>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
