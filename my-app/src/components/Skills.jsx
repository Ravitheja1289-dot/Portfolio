import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Machine Learning', icon: '🧠' },
    { name: 'AI', icon: '🤖' },
    { name: 'Next.js', icon: '🚀' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🖥️' },
    { name: 'MongoDB', icon: '🗄️' },
    { name: 'SQL', icon: '📊' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Git', icon: '📦' },
    { name: 'Express', icon: '🚂' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'HTML5', icon: '💻' },
    { name: 'CSS3', icon: '🎨' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 