// src/components/About.jsx
import React, { useState } from 'react';
import profilePhoto from '../../assets/images/profile-fabrice.jpg';
import AboutModal from '../modals/AboutModal';
import { aboutHobbies, journeyBeforeGame, journeyAfterGame, aboutPhilosophy, aboutWorkStyle } from '../../data/aboutData';
import './About.css';

const aboutParagraphs = [
  {
    label: 'My Journey',
    content: (
      <>
        {journeyBeforeGame} The challenge sparked an idea: why not create{' '}
        <a
          href="https://letter-to-word.haguma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          a simple application
        </a>{' '}
        that lists all possible combinations of real words from any given
          set of letters? {journeyAfterGame}
      </>
    ),
  },
  aboutWorkStyle,
  aboutPhilosophy,
  aboutHobbies
];

const About = () => {
  const [modalContent, setModalContent] = useState(null);

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
          <div className="more-aboutme">
            {aboutParagraphs.map((para, idx) => (
              <button
                key={idx}
                className="about-modal-btn"
                onClick={() => setModalContent(para.content)}
              >
                {para.label}
              </button>
            ))}
            <AboutModal isOpen={!!modalContent} onClose={() => setModalContent(null)}>
              {modalContent}
            </AboutModal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;