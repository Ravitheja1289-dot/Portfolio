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
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating beautiful, responsive, and user-friendly applications that solve
              real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development,
              I'm constantly learning and adapting to new technologies to stay at
              the forefront of web development.
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