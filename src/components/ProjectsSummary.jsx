// src/components/ProjectsSummary.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard'; // Re-use the ProjectCard component
import './ProjectsSummary.css';

const ProjectsSummary = () => {
  // Select first 2 or 3 projects as featured, or implement a 'featured: true' flag in projectsData
  const numberOfFeaturedProjects = 3;
  const featuredProjects = projectsData.slice(0, numberOfFeaturedProjects);

  if (featuredProjects.length === 0 && projectsData.length > 0) {
    // Fallback if slicing results in empty but data exists (e.g. numberOfFeaturedProjects = 0)
    // This case is unlikely with current setup but good for robustness
    // console.warn("No featured projects selected for summary, though projects exist.");
  }


  return (
    <section id="projects-summary" className="page-section projects-summary-section">
      <h2>Featured Projects</h2>
      {featuredProjects.length > 0 ? (
        <div className="projects-summary-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="no-projects-summary-message">
          Exciting projects are in the works! Check back soon or visit the full projects page.
        </p>
      )}

      {projectsData.length > numberOfFeaturedProjects && (
        <div className="view-all-projects-container">
          <Link to="/projects" className="button-primary view-all-button">
            View All Projects
          </Link>
        </div>
      )}
      {projectsData.length === 0 && (
         <div className="view-all-projects-container">
          <Link to="/projects" className="button-primary view-all-button">
            See Projects Page
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsSummary;