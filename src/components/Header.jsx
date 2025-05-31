// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import './Header.css';

const Header = () => {
  // Function to handle smooth scrolling for hash links
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={() => scrollToSection('top')}>
          Fabrice HAGUMA
        </Link>
        <div className="nav-and-toggle">
          <nav>
            <ul>
              <li><a href="/my_portfolio/#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="/my_portfolio/#technologies" onClick={(e) => { e.preventDefault(); scrollToSection('technologies'); }}>Technologies</a></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><a href="/my_portfolio/#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a></li>
              <li><a href="/my_portfolio/#blog-summary" onClick={(e) => { e.preventDefault(); scrollToSection('blog-summary'); }}>Blog</a></li>
              <li><a href="/my_portfolio/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>
        
      </div>
    </header>
  );
};

export default Header;