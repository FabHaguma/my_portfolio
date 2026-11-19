import { Link } from 'react-router-dom';
import profilePhoto from '../../assets/images/profile-fabrice.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <div className="shell hero-layout">
        <div className="hero-content">
          <p className="eyebrow hero-role">Solution engineer</p>
          <h1 id="hero-title">Fabrice <span>Haguma<span className="hero-dot">.</span></span></h1>
          <p className="hero-description">
            I design and build full-stack tools, from an AI assistant for video transcripts
            to an image editor you can use in your browser.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/#projects-summary">
              Explore my work <span aria-hidden="true">↓</span>
            </Link>
            <a className="hero-resume" href="/FabriceHaguma_Resume.pdf" download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-image">
            <img src={profilePhoto} alt="Fabrice Haguma" width="1000" height="1250" fetchPriority="high" />
          </div>
          <figcaption>Based in Kigali, Rwanda</figcaption>
        </figure>
      </div>
    </section>
  );
}
