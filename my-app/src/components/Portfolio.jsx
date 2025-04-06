import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProject, setShowProject] = useState(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that fetches data from OpenWeatherMap API',
      tech: ['React', 'CSS', 'OpenWeatherMap API'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/400/300'
    }
  ];

  // Skills data
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 75 },
    { name: 'GraphQL', level: 70 }
  ];

  // Handle section navigation
  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Header */}
      <header className={`header ${darkMode ? 'dark-header' : 'light-header'}`}>
        <div className="logo">
          <span className="logo-highlight">Dev</span>Portfolio
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {['home', 'about', 'projects', 'skills', 'contact'].map(section => (
            <button 
              key={section}
              onClick={() => navigateTo(section)}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="theme-toggle"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`mobile-menu ${darkMode ? 'dark-mobile-menu' : 'light-mobile-menu'}`}>
          {['home', 'about', 'projects', 'skills', 'contact'].map(section => (
            <button 
              key={section}
              onClick={() => navigateTo(section)}
              className={`mobile-nav-item ${activeSection === section ? 'active' : ''}`}
            >
              {section}
            </button>
          ))}
        </div>
      )}
      
      <main className="main-content">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="section home-section">
            <div className="home-content">
              <h1 className="home-title">
                Hi, I'm <span className="highlight">John Doe</span>
              </h1>
              <h2 className="home-subtitle">Frontend Developer</h2>
              <p className="home-description">
                I create beautiful and functional web applications with a focus on user experience.
              </p>
              <div className="home-buttons">
                <button 
                  onClick={() => navigateTo('projects')}
                  className={`primary-button ${darkMode ? 'dark-primary-button' : 'light-primary-button'}`}
                >
                  View My Work
                </button>
                <button 
                  onClick={() => navigateTo('contact')}
                  className={`secondary-button ${darkMode ? 'dark-secondary-button' : 'light-secondary-button'}`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="home-image-container">
              <div className="profile-image-wrapper">
                <div className={`profile-image-background ${darkMode ? 'dark-accent' : 'light-accent'}`}></div>
                <div className={`profile-image-frame ${darkMode ? 'dark-frame' : 'light-frame'}`}>
                  <img 
                    src="/api/placeholder/250/250" 
                    alt="Profile" 
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-image-container">
                <div className="about-image-wrapper">
                  <div className={`about-image-background ${darkMode ? 'dark-accent' : 'light-accent'}`}></div>
                  <div className={`about-image-frame ${darkMode ? 'dark-frame' : 'light-frame'}`}>
                    <img 
                      src="/api/placeholder/250/250" 
                      alt="About Me" 
                      className="about-image"
                    />
                  </div>
                </div>
              </div>
              <div className="about-text">
                <p className="about-paragraph">
                  I'm a passionate frontend developer with over 5 years of experience creating responsive and intuitive web applications. I specialize in React and modern JavaScript frameworks.
                </p>
                <p className="about-paragraph">
                  My journey began with a degree in Computer Science, followed by roles at tech startups where I honed my skills in creating user-focused digital experiences.
                </p>
                <p className="about-paragraph">
                  When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new web technologies.
                </p>
                <div className="education-section">
                  <h3 className="subsection-title">Education</h3>
                  <div className={`education-card ${darkMode ? 'dark-card' : 'light-card'}`}>
                    <h4 className="education-title">Bachelor of Science in Computer Science</h4>
                    <p className="education-institution">University of Technology, 2016-2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="section projects-section">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`project-card ${darkMode ? 'dark-card' : 'light-card'}`}
                  onClick={() => setShowProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className={`tech-tag ${darkMode ? 'dark-tech-tag' : 'light-tech-tag'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Project Modal */}
            {showProject && (
              <div className="modal-overlay">
                <div className={`modal-content ${darkMode ? 'dark-card' : 'light-card'}`}>
                  <div className="modal-header">
                    <h3 className="modal-title">{showProject.title}</h3>
                    <button 
                      onClick={() => setShowProject(null)}
                      className="modal-close"
                    >
                      ×
                    </button>
                  </div>
                  <img 
                    src={showProject.image} 
                    alt={showProject.title} 
                    className="modal-image"
                  />
                  <p className="modal-description">{showProject.description}</p>
                  <div className="modal-tech-section">
                    <h4 className="modal-tech-title">Technologies Used:</h4>
                    <div className="modal-tech-tags">
                      {showProject.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className={`tech-tag ${darkMode ? 'dark-tech-tag' : 'light-tech-tag'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button 
                      className={`modal-close-button ${darkMode ? 'dark-secondary-button' : 'light-secondary-button'}`}
                      onClick={() => setShowProject(null)}
                    >
                      Close
                    </button>
                    <button 
                      className={`modal-live-button ${darkMode ? 'dark-primary-button' : 'light-primary-button'}`}
                    >
                      View Live
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
        
        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section skills-section">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`skill-card ${darkMode ? 'dark-card' : 'light-card'}`}
                >
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className={`skill-bar-bg ${darkMode ? 'dark-skill-bar-bg' : 'light-skill-bar-bg'}`}>
                    <div 
                      className={`skill-bar-fill ${darkMode ? 'dark-skill-bar-fill' : 'light-skill-bar-fill'}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="experience-section">
              <h3 className="subsection-title">Work Experience</h3>
              <div className={`experience-timeline ${darkMode ? 'dark-timeline' : 'light-timeline'}`}>
                {[
                  {
                    title: 'Senior Frontend Developer',
                    company: 'Tech Solutions Inc.',
                    period: '2022 - Present',
                    description: 'Leading the frontend development team, implementing new features, and optimizing application performance.'
                  },
                  {
                    title: 'Frontend Developer',
                    company: 'Digital Creations',
                    period: '2020 - 2022',
                    description: 'Developed responsive web applications using React, improved UX/UI designs, and collaborated with backend teams.'
                  },
                  {
                    title: 'Junior Web Developer',
                    company: 'Web Experts',
                    period: '2018 - 2020',
                    description: 'Created and maintained websites, implemented responsive designs, and assisted with UX improvements.'
                  }
                ].map((job, index) => (
                  <div 
                    key={index}
                    className="timeline-item"
                  >
                    <div className={`timeline-dot ${darkMode ? 'dark-timeline-dot' : 'light-timeline-dot'}`}>
                      <div className={`timeline-dot-inner ${darkMode ? 'dark-timeline-dot-inner' : 'light-timeline-dot-inner'}`}></div>
                    </div>
                    <div className={`timeline-card ${darkMode ? 'dark-card' : 'light-card'}`}>
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-details">
                        <span className="company-name">{job.company}</span>
                        <span className="job-period">{job.period}</span>
                      </div>
                      <p className="job-description">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3 className="contact-subtitle">Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <Mail size={24} className="contact-icon" />
                    <span>johndoe@example.com</span>
                  </div>
                  <div className="contact-item">
                    <Github size={24} className="contact-icon" />
                    <span>github.com/johndoe</span>
                  </div>
                  <div className="contact-item">
                    <Linkedin size={24} className="contact-icon" />
                    <span>linkedin.com/in/johndoe</span>
                  </div>
                </div>
                
                <h3 className="contact-subtitle social-subtitle">Social Media</h3>
                <div className="social-links">
                  {['twitter', 'facebook', 'instagram'].map((platform) => (
                    <a 
                      key={platform}
                      href="#"
                      className={`social-icon ${darkMode ? 'dark-social-icon' : 'light-social-icon'}`}
                    >
                      <span className="social-initial">{platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="contact-form-container">
                <h3 className="contact-subtitle">Send Me a Message</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`form-input ${darkMode ? 'dark-input' : 'light-input'}`}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`form-input ${darkMode ? 'dark-input' : 'light-input'}`}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      id="message" 
                      rows="5"
                      className={`form-textarea ${darkMode ? 'dark-input' : 'light-input'}`}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className={`submit-button ${darkMode ? 'dark-primary-button' : 'light-primary-button'}`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>
      
      {/* Footer */}
      <footer className={`footer ${darkMode ? 'dark-footer' : 'light-footer'}`}>
        <div className="footer-content">
          <p className="copyright">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="footer-social">
            <Github size={20} className="footer-icon" />
            <Linkedin size={20} className="footer-icon" />
            <Mail size={20} className="footer-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;