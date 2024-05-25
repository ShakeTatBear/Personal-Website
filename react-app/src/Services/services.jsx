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
                          <nav>
          <h2 className="hero-logo">Ser<span>vices</span></h2>
          {/* <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#projects">Upcoming Projects</a></li>
          </ul> */}
          <a href="https://www.youtube.com/channel/UCerGQCBLMtyKpd8VOzZarFQ" className="btn">Subscribe</a>
        </nav>
      <div className="low-poly-background"></div>
      <div className="title">
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
          title="3D Modelling"
          description="Whether for games, simulations, or product design, my models are detailed, realistic, and optimized for performance, providing a solid foundation for your visual projects."
          link="https://github.com/ShakeTatBear"
        />

        <ServiceCard 
          icon={faMobileAlt}
          title=" Database Management & SQL"
          description="Efficient data management is crucial. I specialize in SQL database design, implementation, and maintenance, ensuring any data is organized, secure, and easily accessible for seamless operations."
          link="https://github.com/ShakeTatBear"
        />

        <ServiceCard 
          icon={faMobileAlt}
          title="UX/UI Design"
          description="User experience and interface design are key to engaging and retaining users. My UX/UI design services focus on creating intuitive, visually appealing, and accessible interfaces that enhance user satisfaction and drive engagement."
          link="https://github.com/ShakeTatBear"
        />

        <ServiceCard 
          icon={faMobileAlt}
          title="Networking"
          description="Ensure reliable and secure connectivity with our networking and server setup services. We design, configure, and maintain network infrastructure and servers, providing robust solutions tailored to your needs for optimal performance and scalability."
          link="https://github.com/ShakeTatBear"
        />
        
        {/* Add more ServiceCard components for each service offered */}
      </div>
          
    </section>
  );
};

export default ServicesSection;
