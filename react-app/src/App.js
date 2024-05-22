import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import HeroSection from './Hero/hero';
import AboutSection from './About/about';
import ServicesSection from './Services/services';
import Particles from './Particles/particles';
import ProjectsSection from './Projects/projects';
import './App.css';

const sections = ['/', '/about', '/projects', '/services'];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const currentIndex = sections.indexOf(currentPath);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    navigate(sections[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    navigate(sections[prevIndex]);
  };

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
