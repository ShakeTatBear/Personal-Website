import React, {useState, useEffect} from 'react';
import './hero.css';
import backgroundimage4 from './public/backgroundimage4.jpg'

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      // Handle the response data as needed
      if (data.success) {
        setMessage("Thanks! I'll be in touch soon!");
      } else {
        // Handle any errors from the server side
        setMessage(data.message || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <div className="hero" id="home">
        <img src={backgroundimage4} alt="Tech Background" className="image-rotate" />
        <nav>
          <h2 className="hero-logo">Portf<span>olio</span></h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#projects">Upcoming Projects</a></li>
          </ul>
          <a href="https://www.youtube.com/channel/UCerGQCBLMtyKpd8VOzZarFQ" className="btn">Subscribe</a>
        </nav>
      </div>
      <div className="content" id="content">
        <h4>Hello, my name is</h4>
        <h1>Josh Brown</h1>
        <h3>Welcome to my page - enter your email to contact me!</h3>
        <div className="newsletter" id="newsletter">
        <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="submit" className="btn">Submit</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;