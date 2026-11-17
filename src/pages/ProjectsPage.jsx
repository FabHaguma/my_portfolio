import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const searchInput = useRef(null);
  const search = query.trim().toLowerCase();
  const matchingProjects = projectsData.filter(project =>
    [project.name, project.smallDescription, project.description, ...project.technologies]
      .some(value => value?.toLowerCase().includes(search))
  );

  function clearSearch() {
    setQuery('');
    searchInput.current.focus();
  }

  return (
    <section id="projects-page" className="projects-page" tabIndex={-1} aria-labelledby="projects-title">
      <div className="catalog-intro">
        <div className="shell">
          <Link to="/" className="catalog-back"><span aria-hidden="true">←</span> Home</Link>
          <h1 className="section-title" id="projects-title">Projects<span>.</span></h1>
          <p className="section-description">Explore my apps, games, and tools. Each project includes a live demo or source code where available.</p>
        </div>
      </div>

      <div className="shell catalog">
        <div className="catalog-controls">
          <div className="catalog-search">
            <label htmlFor="project-search">Find a project</label>
            <input
              type="search"
              id="project-search"
              ref={searchInput}
              placeholder="Try Python or React"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
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
            <p>No projects match “{query.trim()}”.</p>
            <button className="button button-outline" type="button" onClick={clearSearch}>Clear search</button>
          </div>
        )}
      </div>
    </section>
  );
}
