import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume-section shell" tabIndex={-1} aria-labelledby="resume-title">
      <div className="resume-panel">
        <div>
          <h2 id="resume-title">Résumé</h2>
          <p>My experience, education, and technical skills.</p>
        </div>
        <a className="button button-outline" href="/FabriceHaguma_Resume.pdf" download>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
