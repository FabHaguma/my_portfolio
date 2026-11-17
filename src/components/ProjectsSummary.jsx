import { Link } from 'react-router-dom';
import { featuredProjectIds, projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import './ProjectsSummary.css';

const featuredProjects = featuredProjectIds
  .map(id => projectsData.find(project => project.id === id))
  .filter(Boolean);

export default function ProjectsSummary() {
  return (
    <section id="projects-summary" className="projects-summary-section shell" tabIndex={-1} aria-labelledby="work-title">
      <div className="work-heading">
        <div>
          <h2 className="section-title" id="work-title">Selected work</h2>
          <p className="section-description">A few of the tools and apps I’ve built.</p>
        </div>
        <Link to="/projects" className="button button-outline">
          All projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="projects-grid">
        {featuredProjects.map(project => <ProjectCard key={project.id} project={project} featured />)}
      </div>
    </section>
  );
}
