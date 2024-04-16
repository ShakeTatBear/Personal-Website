import React from 'react';
// If using FontAwesome, make sure to import the icons you're using
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt, faMicrophoneAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={icon} size="2x" />
      <h5>{title}</h5>
      <div className="pra">
        <p>{description}</p>
        <p style={{ textAlign: 'center' }}>
          <a className="button" href={link}>Explore Projects</a>
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="service" id="service">
      <div className="low-poly-background"></div>
      <div className="title">
        <h2>Services</h2>
      </div>
      
      <div className="box">
        <ServiceCard 
          icon={faCode}
          title="Web Development"
          description="Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible."
          link="https://github.com/ShakeTatBear"
        />
        
        {/* ... Other ServiceCard components ... */}
        
        <ServiceCard 
          icon={faMobileAlt}
          title="Coding & App Development"
          description="Crafting seamless and intuitive applications for all platforms. Building robust and scalable software solutions with clean and efficient code."
          link="https://github.com/ShakeTatBear"
        />
        
        <ServiceCard 
          icon={faMobileAlt}
          title="Coding & App Development"
          description="Crafting seamless and intuitive applications for all platforms. Building robust and scalable software solutions with clean and efficient code."
          link="https://github.com/ShakeTatBear"
        />

        <ServiceCard 
          icon={faMobileAlt}
          title="Coding & App Development"
          description="Crafting seamless and intuitive applications for all platforms. Building robust and scalable software solutions with clean and efficient code."
          link="https://github.com/ShakeTatBear"
        />

        <ServiceCard 
          icon={faMobileAlt}
          title="Coding & App Development"
          description="Crafting seamless and intuitive applications for all platforms. Building robust and scalable software solutions with clean and efficient code."
          link="https://github.com/ShakeTatBear"
        />
        
        {/* Add more ServiceCard components for each service offered */}
      </div>
          
    </section>
  );
};

export default ServicesSection;
