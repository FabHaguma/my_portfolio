import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const technologies = [...new Set(projectsData.flatMap(project => project.technologies))]
  .sort((left, right) => left.localeCompare(right));

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [technology, setTechnology] = useState('');
  const searchInput = useRef(null);
  const search = query.trim().toLowerCase();
  const matchingProjects = projectsData.filter(project => {
    if (technology && !project.technologies.includes(technology)) return false;
    const fields = [project.name, project.smallDescription, project.description, ...project.technologies];
    return fields.some(value => value?.toLowerCase().includes(search));
  });

  function resetFilters() {
    setQuery('');
    setTechnology('');
    searchInput.current.focus();
  }

  return (
    <section id="projects-page" className="projects-page" tabIndex={-1} aria-labelledby="projects-title">
      <div className="catalog-intro">
        <div className="shell">
          <Link to="/" className="catalog-back"><span aria-hidden="true">←</span> Home</Link>
          <h1 className="section-title" id="projects-title">Projects<span>.</span></h1>
          <p className="section-description">Apps, games, and tools I’ve built. Explore a demo or look through the code.</p>
        </div>
      </div>

      <div className="shell catalog">
        <div className="catalog-controls" role="search" aria-label="Filter projects">
          <div className="catalog-search">
            <label htmlFor="project-search">Find a project</label>
            <input
              type="search"
              id="project-search"
              ref={searchInput}
              placeholder="Search by name or keyword"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
          </div>
          <div className="catalog-search catalog-technology">
            <label htmlFor="project-technology">Technology</label>
            <select id="project-technology" value={technology} onChange={event => setTechnology(event.target.value)}>
              <option value="">All technologies</option>
              {technologies.map(name => <option key={name}>{name}</option>)}
            </select>
          </div>
          <p className="catalog-count" role="status">
            {matchingProjects.length} {matchingProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {matchingProjects.length > 0 ? (
          <div className="projects-grid">
            {matchingProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        ) : (
          <div className="catalog-empty">
            <p>No projects match “{query.trim()}”{technology && ` using ${technology}`}.</p>
            <button className="button button-outline" type="button" onClick={resetFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
