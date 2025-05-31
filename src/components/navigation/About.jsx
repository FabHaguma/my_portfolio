// src/components/About.jsx
import React from 'react';
import profilePhoto from '../../assets/images/profile-fabrice.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="page-section about-section">
      <div className="about-content">
        <div className="about-image-container">
          <img src={profilePhoto} alt="Fabrice Haguma" className="profile-photo" />
        </div>
        <div className="about-text-container">
          <h2>About Me</h2>
          <p className="tagline">
            I build seamless and efficient web applications, bridging the gap
            between engaging user interfaces and robust back-end logic. Based in
            Kigali, Rwanda.
          </p>
          <p>
            {/* Add more detailed paragraphs about yourself here. */}
            {/* For example: your passion for software development, what drives you, */}
            {/* key experiences, or what you're currently learning/focused on. */}
            Driven by a passion for creating impactful digital experiences, I specialize in
            full-stack development with a keen eye for detail and user-centric design.
            My journey in tech started with [mention something specific], and I've since
            honed my skills in [mention 1-2 key areas]. I thrive in collaborative
            environments and am always eager to learn new technologies to solve
            real-world problems.
          </p>
          {/* You can add another paragraph or two if you like. */}
        </div>
      </div>
    </section>
  );
};

export default About;