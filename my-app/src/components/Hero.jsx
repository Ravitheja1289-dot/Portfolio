import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ravi Teja Reddy</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer / AI Engineer</h2>
        <p className="hero-description">
        Building smart and seamless digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#projects" className="btn secondary">View Projects</a>
          <a href="" target="_blank" rel="noopener noreferrer" className="btn resume">
            View Resume <i className="fa-solid fa-file-pdf"></i>
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Ravitheja1289-dot" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ravithejareddy1289/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Ravitheja1289" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://leetcode.com/u/Ravitheja_Reddy_1289/" target="_blank" rel="noopener noreferrer">
            <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="leetcode-icon" />
          </a>
          <a href="https://www.hackerrank.com/profile/ravithejareddy11" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-hackerrank"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 