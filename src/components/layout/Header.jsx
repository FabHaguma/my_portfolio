import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="app-header">
      <div className="shell header-content">
        <Link to="/" className="wordmark" aria-label="Fabrice Haguma home">
          <span className="monogram" aria-hidden="true">FH</span>
          <span className="wordmark-name">Fabrice Haguma</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/#about">About</Link>
          <NavLink to="/projects">Projects</NavLink>
          <Link to="/#technologies" className="nav-toolkit">Toolkit</Link>
        </nav>
        <Link to="/#contact" className="header-contact">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
