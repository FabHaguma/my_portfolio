// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
// Optional: Import SVG icons or a font icon library if you want to use icons
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/fabhaguma', /* icon: <FaGithub /> */ },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fabricehaguma/', /* icon: <FaLinkedin /> */ },
    // Add more: e.g., Twitter, Dev.to, etc.
    // { name: 'Twitter', url: 'https://twitter.com/yourhandle', /* icon: <FaTwitter /> */ },
  ];

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {/* link.icon || link.name  // Use icon if available, otherwise text */}
              {link.name} {/* For now, just text. Icons can be added in a styling phase */}
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