// src/components/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumePdfPath = '/FabriceHaguma_Resume.pdf'; // Path relative to the deployed site's root

  return (
    <section id="resume" className="page-section resume-section">
      <h2>My Resume</h2>
      <p>
        Interested in learning more about my professional background?
        Download my resume for a detailed overview of my skills and experience.
      </p>
      <a
        href={resumePdfPath}
        download="FabriceHaguma_Resume.pdf" // Suggests filename for download
        target="_blank" // Opens in new tab, also good for viewing before download
        rel="noopener noreferrer"
        className="resume-download-button"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;