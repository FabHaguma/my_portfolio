import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/navigation/About';
import Hero from './components/navigation/Hero';
import ProjectsSummary from './components/ProjectsSummary';
import Technologies from './components/navigation/Technologies';
import Resume from './components/navigation/Resume';
import Contact from './components/navigation/Contact';
import ProjectsPage from './pages/ProjectsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSummary />
      <About />
      <Technologies />
      <Resume />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname === '/projects'
      ? 'Projects | Fabrice Haguma'
      : 'Fabrice Haguma | Solution Engineer';

    const target = location.hash && document.getElementById(location.hash.slice(1));

    if (target) {
      target.focus({ preventScroll: true });
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
