// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
// Optional: Import SVG icons or a font icon library if you want to use icons
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/fabhaguma', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fabrice-haguma/', icon: '💼' },
    // Add more: e.g., Twitter, Dev.to, etc.
    // { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '🐦' },
  ];

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <span style={{marginRight: '0.5em'}}>{link.icon}</span>{link.name}
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