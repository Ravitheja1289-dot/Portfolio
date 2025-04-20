import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
            I'm Ravi — a full-stack web developer, AI/ML enthusiast, and natural leader currently pursuing my BTech. I love building sleek websites, diving deep into machine learning models, and leading tech events that spark innovation. My journey is all about blending creativity, code, and community.
            </p>
            <p>
            From coordinating college fests like Aavishkar 2024, to reaching the finals at Megathon IIIT-H, and attending elite workshops like IIT Hyderabad’s AI Bootcamp—I'm always learning, growing, and pushing limits.
            </p>
<p>
Whether it's developing a traffic automation system with YOLOv8, designing a 3D real estate site using Three.js, or building fraud detection systems with NLP—my work lies at the intersection of tech and impact.

            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 