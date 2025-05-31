// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Or your global stylesheet

import Header from './components/Header'; // Will need modification for navigation links
import About from './components/About';
import ProjectsSummary from './components/ProjectsSummary';
import Technologies from './components/Technologies';
import Resume from './components/Resume';
import BlogSummary from './components/BlogSummary';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

// Component for the main content of the single-page scroll
const HomePageLayout = () => (
  <>
    <About />
    <ProjectsSummary />
    <Technologies />
    <Resume />
    <BlogSummary />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <Header /> {/* We'll add <Link> components to Header later */}
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