import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Move Smart",
      description:
        "An automated traffic management system that uses cameras and YOLOv8 to detect the number of vehicles and emergency vehicles in real-time, dynamically adjusting traffic light timing.",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLOv8"],
      github: "https://github.com/your-repo-link-traffic",
      liveDemo: "https://your-live-demo-link-traffic",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Mindful Strength",
      description:
        "A chatbot aimed at providing mental health support using AI, offering friendly conversations and guidance to users facing stress or emotional challenges.",
      technologies: ["Python", "NLP", "Flask"],
      github: "https://github.com/your-repo-link-chatbot",
      liveDemo: "https://your-live-demo-link-chatbot",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Cyber Shield",
      description:
        "An AI-driven fraud detection system for online payments and email scams. Uses NLP to analyze email content and detect fake transaction patterns.",
      technologies: ["Python", "Scikit-learn", "NLP", "Flask"],
      github: "https://github.com/your-repo-link-cybershield",
      liveDemo: "https://your-live-demo-link-cybershield",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Quantum Fin",
      description:
        "A generative AI-powered virtual financial assistant that helps users manage finances with smart insights (excluding fraud detection features).",
      technologies: ["Python", "LangChain", "GenAI", "React"],
      github: "https://github.com/your-repo-link-quantumfin",
      liveDemo: "https://your-live-demo-link-quantumfin",
      image: "https://via.placeholder.com/600x400"
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data using a weather API.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/your-username/weather-dashboard",
      liveDemo: "https://your-live-demo-link.com/weather",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 