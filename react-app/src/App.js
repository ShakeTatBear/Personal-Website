import React, { useState, useEffect, Fragment } from 'react'
import HeroSection from './Hero/hero';
import AboutSection from './About/about';
import ServicesSection from './Services/services';
import Particles from './Particles/particles';
import ProjectsSection from './Projects/projects';

const App = () =>{

  return(
    <div>
      <HeroSection />
      {/* Other components... */}
      <AboutSection />
      {<Particles />}
      <ServicesSection />
      {<Particles />}
      <ProjectsSection />
      
    </div>
  )
}

export default App;
