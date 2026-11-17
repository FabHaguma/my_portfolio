import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const { pathname } = useLocation();
  const topLink = pathname === '/projects' ? '/projects#projects-page' : '/#top';

  return (
    <footer className="app-footer">
      <div className="shell footer-content">
        <p>© {new Date().getFullYear()} Fabrice Haguma</p>
        <nav aria-label="Social links">
          <a href="https://github.com/fabhaguma" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/fabrice-haguma/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          {pathname === '/projects' && <a href="mailto:fabrice@haguma.com">Email <span aria-hidden="true">↗</span></a>}
        </nav>
        <Link to={topLink}>Back to top <span aria-hidden="true">↑</span></Link>
      </div>
    </footer>
  );
}
