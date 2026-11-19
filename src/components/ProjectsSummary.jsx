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
        <h2 className="section-title" id="work-title">Selected <span>work</span></h2>
        <Link to="/projects" className="button button-outline">
          All projects ({projectsData.length}) <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="featured-projects">
        {featuredProjects.map(project => <ProjectCard key={project.id} project={project} featured />)}
      </div>
    </section>
  );
}
