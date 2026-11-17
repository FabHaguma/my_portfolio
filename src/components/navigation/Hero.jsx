import { Link } from 'react-router-dom';
import profilePhoto from '../../assets/images/profile-fabrice.jpg';
import './About.css';

export default function Hero() {
  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <div className="shell hero-layout">
        <div className="hero-content">
          <p className="eyebrow hero-location">Kigali, Rwanda</p>
          <h1 id="hero-title">Fabrice<br />Haguma<span>.</span></h1>
          <p className="hero-role">Solution Engineer</p>
          <p className="hero-description">
            I design software around real business needs, from choosing the architecture
            to building the application people use.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/#projects-summary">
              Explore my work <span aria-hidden="true">↓</span>
            </Link>
            <Link className="hero-resume" to="/#resume">
              Résumé <span aria-hidden="true">↘</span>
            </Link>
          </div>
        </div>
        <div className="portrait">
          <div className="portrait-image">
            <img src={profilePhoto} alt="Fabrice Haguma" width="1000" height="1250" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
