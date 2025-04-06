"use client"

import { useState, useEffect } from "react"
import "./portfolio.css"
import { Sun, Moon, Github, Linkedin, Mail, Menu, X, ArrowRight, ExternalLink } from "lucide-react"

const Portfolio = () => {
  // Theme state management
  const [darkMode, setDarkMode] = useState(false)
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Scroll position for navbar styling
  const [scrolled, setScrolled] = useState(false)

  // Projects data
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://example.com/project1",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with payment integration",
      tags: ["React", "Firebase", "Stripe"],
      link: "https://example.com/project2",
    },
    {
      title: "Project Three",
      description: "A mobile-responsive dashboard with data visualization",
      tags: ["React", "D3.js", "Tailwind CSS"],
      link: "https://example.com/project3",
    },
  ]

  // Skills data
  const skills = ["JavaScript", "React", "Node.js", "HTML/CSS", "MongoDB", "Express", "Git", "Responsive Design"]

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu when clicking a nav link
  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Apply theme on change and initialize from localStorage
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
    }

    // Apply theme
    if (darkMode) {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#" className="logo">
            JD
          </a>

          <div className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <Sun className="icon-small" /> : <Moon className="icon-small" />}
            </button>
          </div>

          <div className="mobile-nav-toggle">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <Sun className="icon-small" /> : <Moon className="icon-small" />}
            </button>
            <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-in">John Doe</h1>
          <h2 className="animate-in delay-1">Frontend Developer</h2>
          <p className="animate-in delay-2">I build clean, minimal, and functional websites.</p>
          <div className="hero-cta animate-in delay-3">
            <a href="#contact" className="btn primary">
              Get in touch <ArrowRight className="icon-small" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a minimalist frontend developer focused on creating clean, functional, and user-friendly interfaces.
              With a strong foundation in modern JavaScript frameworks, I build responsive web applications that
              prioritize user experience.
            </p>
            <p>
              My approach combines technical expertise with an eye for design, resulting in websites that are both
              visually appealing and highly performant. I believe in writing clean, maintainable code and staying
              current with the latest web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="icon-small" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <a href="mailto:hello@johndoe.com">hello@johndoe.com</a>
            </div>
            <div className="contact-item">
              <Github className="icon" />
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                github.com/johndoe
              </a>
            </div>
            <div className="contact-item">
              <Linkedin className="icon" />
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/johndoe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} John Doe</p>
          <div className="social-links">
            <a href="https://github.com/johndoe" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="icon-small" />
            </a>
            <a href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="icon-small" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

