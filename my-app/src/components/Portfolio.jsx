import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Sample data structure
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A sleek, modern portfolio built using React and Framer Motion.',
    tech: ['React', 'CSS', 'Framer Motion'],
    github: 'https://github.com/user/portfolio',
    demo: 'https://user.github.io/portfolio',
    image: 'https://source.unsplash.com/400x300/?website,code',
  },
  {
    id: 2,
    title: 'Task Tracker App',
    description: 'A task tracker that lets you organize your day efficiently.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/user/task-tracker',
    demo: 'https://tasktracker.com',
    image: 'https://source.unsplash.com/400x300/?productivity,ui',
  },
  {
    id: 3,
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing e-commerce sales, orders, and customers.',
    tech: ['Vue', 'Bootstrap', 'Chart.js'],
    github: 'https://github.com/user/ecommerce-dashboard',
    demo: 'https://admin.ecommerce.com',
    image: 'https://source.unsplash.com/400x300/?dashboard,analytics',
  },
  // Add more projects to increase line count
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tech.includes(filter)));
    }
  }, [filter]);

  const handleMouseEnter = (id) => setHoveredId(id);
  const handleMouseLeave = () => setHoveredId(null);

  const techFilters = Array.from(new Set(projects.flatMap(p => p.tech)));

  return (
    <section className="portfolio-section">
      <motion.div
        className="portfolio-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">Here are some of my favorite projects.</p>
      </motion.div>

      <div className="filter-container">
        <button onClick={() => setFilter('All')} className={`filter-button ${filter === 'All' ? 'active' : ''}`}>All</button>
        {techFilters.map((tech, index) => (
          <button
            key={index}
            onClick={() => setFilter(tech)}
            className={`filter-button ${filter === tech ? 'active' : ''}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            variants={fadeInVariant}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="icon" />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="icon" />
                </a>
              </motion.div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add a cool call-to-action */}
      <motion.div
        className="cta-banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h3>Have a project in mind?</h3>
        <p>Let's collaborate and build something amazing together!</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="portfolio-footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <p>© {new Date().getFullYear()} Your Name. Built with 💻 and ☕</p>
      </motion.footer>
    </section>
  );
};

export default Portfolio;
