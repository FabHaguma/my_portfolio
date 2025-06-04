// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, useSmallDescription = false }) => {
  if (!project) {
    return null; // Or some fallback UI if a project is unexpectedly undefined
  }

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          className="project-screenshot"
          loading="lazy" // Lazy load images for better performance
        />
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{useSmallDescription ? project.smallDescription : project.description}</p>
        {!useSmallDescription && (
          <div className="project-technologies">
            <strong>Built with:</strong>
            <ul className="tech-tags">
              {project.technologies.map((tech, index) => (
                <li key={index} className="tech-tag">{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="project-links">
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
              aria-label={`Live demo of ${project.name}`}
            >
              Live Demo
            </a>
          )}
          {!useSmallDescription && project.sourceCodeLink && (
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link source-link"
              aria-label={`Source code of ${project.name}`}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;