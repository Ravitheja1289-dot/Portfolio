import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code, User, Mail, ExternalLink, GitHub, Linkedin, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    // Add a slight delay to trigger animations
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Projects data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather application that displays forecast data based on location.",
      tech: ["React", "Weather API", "Chart.js", "Tailwind CSS"],
      githubLink: "#"
    },
    {
      title: "Task Management System",
      description: "A kanban-style task management application with drag and drop functionality.",
      tech: ["React", "Redux", "Firebase", "react-beautiful-dnd"],
      githubLink: "#"
    }
  ];

  // Skills data
  const skills = [
    { name: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"] },
    { name: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Jest"] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold flex items-center" onClick={() => setActiveSection('home')}>
            <span className="text-blue-500 mr-2">&lt;</span>
            DevPortfolio
            <span className="text-blue-500 ml-2">/&gt;</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#about" 
              className={`hover:text-blue-500 transition-colors ${activeSection === 'about' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('about')}
            >About</a>
            <a 
              href="#projects" 
              className={`hover:text-blue-500 transition-colors ${activeSection === 'projects' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('projects')}
            >Projects</a>
            <a 
              href="#skills" 
              className={`hover:text-blue-500 transition-colors ${activeSection === 'skills' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('skills')}
            >Skills</a>
            <a 
              href="#contact" 
              className={`hover:text-blue-500 transition-colors ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('contact')}
            >Contact</a>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="mr-4">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className={`md:hidden transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <a 
              href="#about" 
              className="block py-3 px-4 hover:bg-blue-500 hover:text-white transition-colors"
              onClick={() => {setActiveSection('about'); setMenuOpen(false);}}
            >About</a>
            <a 
              href="#projects" 
              className="block py-3 px-4 hover:bg-blue-500 hover:text-white transition-colors"
              onClick={() => {setActiveSection('projects'); setMenuOpen(false);}}
            >Projects</a>
            <a 
              href="#skills" 
              className="block py-3 px-4 hover:bg-blue-500 hover:text-white transition-colors"
              onClick={() => {setActiveSection('skills'); setMenuOpen(false);}}
            >Skills</a>
            <a 
              href="#contact" 
              className="block py-3 px-4 hover:bg-blue-500 hover:text-white transition-colors"
              onClick={() => {setActiveSection('contact'); setMenuOpen(false);}}
            >Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 py-16 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transform transition-transform duration-700 ease-out translate-y-0 opacity-100" 
            style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(50px)' }}>
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 transform transition-transform duration-700 delay-200 ease-out"
            style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(50px)' }}>
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12 transform transition-transform duration-700 delay-300 ease-out"
            style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(50px)' }}>
            I build modern, responsive web applications with a focus on user experience and clean code.
          </p>
          <div className="flex justify-center space-x-4 transform transition-transform duration-700 delay-500 ease-out"
            style={{ transform: isLoaded ? 'translateY(0)' : 'translateY(50px)' }}>
            <a 
              href="#projects" 
              className={`px-6 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all hover:scale-105`}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-md border-2 ${darkMode ? 'border-gray-300 hover:border-white' : 'border-gray-500 hover:border-gray-700'} font-medium transition-all hover:scale-105`}
            >
              Contact Me
            </a>
          </div>
          <div className="mt-16 flex justify-center space-x-6 transform transition-opacity duration-1000 delay-700"
            style={{ opacity: isLoaded ? 1 : 0 }}>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <GitHub size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-500">About</span> Me
          </h2>
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className={`w-64 h-64 rounded-full mx-auto overflow-hidden border-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} transition-transform hover:scale-105 duration-300`}>
                <img 
                  src="/api/placeholder/300/300" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <p className="text-lg mb-6">
                Hello! I'm a passionate full-stack developer with over 5 years of experience creating web applications. I specialize in React for frontend and Node.js for backend development.
              </p>
              <p className="text-lg mb-6">
                My approach to development combines technical expertise with an eye for design, ensuring that the applications I build are not only functional but also intuitive and visually appealing.
              </p>
              <p className="text-lg">
                When I'm not coding, I enjoy hiking, reading tech blogs, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Code size={64} className="text-blue-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-600 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink}
                    className="flex items-center font-medium text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <GitHub size={16} className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-blue-500">Skills</span> & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`rounded-lg p-6 transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">{skill.name}</h3>
                <ul>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center mb-2">
                      <div className={`w-2 h-2 rounded-full mr-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' : 'bg-white text-gray-800 border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' : 'bg-white text-gray-800 border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' : 'bg-white text-gray-800 border-gray-300 focus:border-blue-500'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea 
                  rows="5" 
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' : 'bg-white text-gray-800 border-gray-300 focus:border-blue-500'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <GitHub size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;