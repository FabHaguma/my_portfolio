// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/fabhaguma', icon: githubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fabrice-haguma/', icon: linkedinIcon },
  ];

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="social-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={link.icon} alt={link.name} style={{ width: '20px', height: '20px', marginRight: '0.5em' }} />
                <span>{link.name}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="copyright">
          © {currentYear} Fabrice HAGUMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;