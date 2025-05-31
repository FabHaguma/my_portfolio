// src/components/Header.jsx
import React from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId, targetPath = '/') => {
    // Check if we are already on the target path (usually home page)
    if (location.pathname === targetPath) {
      // If already on the correct page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate first, then scroll
      // We'll pass the sectionId in the state to be picked up by HomePageLayout
      navigate(targetPath, { state: { scrollToSection: sectionId } });
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Use scrollToSection for the logo to go to top of homepage */}
        <a
          href="/my_portfolio/" // Keep href for SEO / right-click open in new tab
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('top', '/'); // 'top' can be a special id for scrolling to page top
          }}
          className="logo"
        >
          Fabrice HAGUMA
        </a>

        <div className="nav-and-toggle">
          <nav>
            <ul>
              <li>
                <a
                  href="/my_portfolio/#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/my_portfolio/#technologies"
                  onClick={(e) => { e.preventDefault(); scrollToSection('technologies'); }}
                >
                  Technologies
                </a>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              {/* <li>
                <a
                  href="/my_portfolio/#resume"
                  onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/my_portfolio/#blog-summary"
                  onClick={(e) => { e.preventDefault(); scrollToSection('blog-summary'); }}
                >
                  Blog
                </a>
              </li> */}
              <li>
                <a
                  href="/my_portfolio/#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;