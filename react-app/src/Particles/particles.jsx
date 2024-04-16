import React, { useEffect, useRef } from 'react';
import './particles.css'; // Make sure to import the styles necessary for the particles

const Particles = ({ numParticles = 500 }) => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const aboutParticles = particlesContainerRef.current;
    
    for (let i = 0; i < numParticles; i++) {
      createParticle(aboutParticles);
    }

    function createParticle(container) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 1; // Random size between 1 and 5px
      const x = Math.random() * container.offsetWidth; // Random x position within container width
      const y = Math.random() * container.offsetHeight; // Random y position within container height

      // Set initial position and size
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // Random opacity for fade in/out effect
      particle.style.opacity = Math.random().toString();

      // Append particle to container
      container.appendChild(particle);

      // Random animation duration between 10 and 20 seconds
      const duration = Math.random() * 10 + 10;
      
      // Apply animation style
      particle.style.animation = `move ${duration}s linear infinite, fadeInOut ${duration / 2}s ease-in-out infinite`;

      // Random delay for fade-in animation
      particle.style.animationDelay = `-${Math.random() * duration}s`;
    }

    // Cleanup function to remove particles
    return () => {
      aboutParticles.innerHTML = ''; // Clear the container when component unmounts
    };
  }, [numParticles]);

  return <div className="particles" ref={particlesContainerRef} />;
};

export default Particles;
