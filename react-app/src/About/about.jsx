import React, { useEffect, useState, useRef } from 'react';
import './about.css';
import image3 from './public/3.jpg';
import image4 from './public/4.jpg';

const AboutSection = () => {

  
    // State to keep track of which image is currently shown
    const [currentImage, setCurrentImage] = useState(image4);
  
    // Event handler to toggle the image
    const changeImage = () => {
      setCurrentImage(currentImage === image4 ? image3 : image4);
    };
  


  return (
    <section className="about" id="about">
      <div className="main">
        <div className="low-poly-background"></div>
        <img 
          className="img1" 
          src={currentImage} 
          alt="About" 
          onClick={changeImage}
        />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <h5>Developer <span>and</span> Designer</h5>
        <p>
        As an enthusiastic entry-level computer engineer, I'm fully immersed in the multifaceted fields of web and app development, 
          networking, data analysis, and 3D modeling and printing. Each day presents new challenges that I eagerly embrace as opportunities for growth. 
          In software development, I'm committed to crafting elegant solutions that prioritize user experience, leveraging various programming languages 
          and frameworks to bring ideas to life. Simultaneously, in networking, I delve deep into the intricacies of designing and implementing robust 
          connectivity solutions. From configuring routers and switches to optimizing network performance, I immerse myself in understanding network topologies and protocols.
           Moreover, I'm keenly interested in automation techniques, exploring ways to streamline network management processes through scripting and automation tools, which 
           not only enhance efficiency but also deepen my understanding of networking fundamentals. I'm open to work any software or hardware engineering positions!
        </p>
        <button className="button_lets_talk"type="button">Let's Talk</button>
      </div>

    </section>
  );
};

export default AboutSection;