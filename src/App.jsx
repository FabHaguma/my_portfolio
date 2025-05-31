// src/App.jsx
import React, { useLayoutEffect } from 'react'; // Import useLayoutEffect
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import './App.css';

import Header from './components/layout/Header';
import About from './components/navigation/About';
import ProjectsSummary from './components/ProjectsSummary';
import Technologies from './components/navigation/Technologies';
import Resume from './components/navigation/Resume';
// import BlogSummary from './components/BlogSummary';
import Contact from './components/navigation/Contact';
import Footer from './components/layout/Footer';
import ProjectsPage from './pages/ProjectsPage';

// Component for the main content of the single-page scroll
const HomePageLayout = () => {
  const location = useLocation(); // Get location object

  // useLayoutEffect is preferred for DOM manipulations that need to happen before paint
  useLayoutEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (!location.hash) { // If no hash and no state, scroll to top on initial load of home
      window.scrollTo(0, 0);
    }
  }, [location.state, location.hash]); // Re-run effect if location.state changes

  return (
    <>
      {/* Add an invisible element at the top for the 'top' scroll target if needed */}
      <div id="top" style={{ position: 'absolute', top: 0 }}></div>
      <About />
      <ProjectsSummary />
      <Technologies />
      <Resume />
      {/* <BlogSummary /> */}
      <Contact />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;