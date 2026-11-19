import { aboutTopics } from '../../data/aboutData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section" tabIndex={-1} aria-labelledby="about-title">
      <div className="shell about-layout">
        <div>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">It started with<br /><span>a word game.</span></h2>
          <p className="about-intro">
            A game on my phone made me wonder how to find every word in a set of letters.
            I wrote a word finder to try the combinations for me. Turning that question into
            something I could use is what drew me to engineering.
          </p>
          <a className="about-word-finder" href="https://letter-to-word.haguma.com/" target="_blank" rel="noreferrer">
            Try the word finder <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-topics">
          {aboutTopics.map(({ label, content }) => (
            <details key={label}>
              <summary>{label}</summary>
              <p>{content}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
