// src/pages/ProjectsPage.jsx
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom'; // If you need a link back to home, etc.
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="projects-page" className="page-section projects-page-section">
      <div className="projects-page-header">
        <h2>All My Projects</h2>
        <p>
          Here's a collection of projects I've worked on. Explore them to see my
          skills in action, from initial concept to deployment.
        </p>
        {/* Optional: <Link to="/" className="button-style">Back to Home</Link> */}
      </div>

      {projectsData.length > 0 ? (
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="no-projects-message">
          <p>No projects to display at the moment. I'm currently working on new and exciting things, so please check back soon!</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;