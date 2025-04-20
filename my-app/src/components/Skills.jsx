import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'JavaScript', icon: '⚡' },
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'Three.js', icon: '🎮' }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: 'Node.js', icon: '🖥️' }
      ]
    },
    {
      category: "AI/ML",
      skills: [
        { name: 'OpenCV', icon: '👁️' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'YOLOv8', icon: '🎯' },
        { name: 'NLP', icon: '📝' },
        { name: 'Deep Learning', icon: '🤖' }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎨' }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: 'Leadership', icon: '👥' },
        { name: 'Public Speaking', icon: '🎤' },
        { name: 'Teamwork', icon: '🤝' },
        { name: 'Event Management', icon: '📅' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-box">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 