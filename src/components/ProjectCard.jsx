import './ProjectCard.css';

export default function ProjectCard({ project, featured = false }) {
  const { name, screenshot, smallDescription, description, technologies, liveDemoLink, sourceCodeLink } = project;
  const tags = featured ? technologies.slice(0, 3) : technologies;

  return (
    <article className="project-card">
      <div className="project-media">
        <img src={screenshot} alt={`Screenshot of ${name}`} loading="lazy" decoding="async" />
      </div>
      <div className="project-info">
        <h3>{name}</h3>
        <p>{smallDescription || description}</p>
        <ul className="tech-tags" aria-label="Technologies">
          {tags.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noreferrer" aria-label={`Live demo of ${name}`}>
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {sourceCodeLink && (
            <a href={sourceCodeLink} target="_blank" rel="noreferrer" aria-label={`Source code of ${name}`}>
              Source code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        {!featured && smallDescription && description && (
          <details className="project-details">
            <summary>Project details</summary>
            <p>{description}</p>
          </details>
        )}
      </div>
    </article>
  );
}
