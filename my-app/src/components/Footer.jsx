import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Portfolio</h2>
            <p>Creating beautiful and functional web applications</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://github.com/Ravitheja1289-dot" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ravithejareddy1289/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/Ravitheja1289" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://leetcode.com/u/Ravitheja_Reddy_1289/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="leetcode-icon" />
              </a>
              <a href="https://www.hackerrank.com/profile/ravithejareddy11" target="_blank" rel="noopener noreferrer" title="HackerRank">
                <i className="fa-brands fa-hackerrank"></i>
              </a>
              <a href="https://www.instagram.com/ravi__1289/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with ❤️ by Ravi | Powered by React, Tailwind, and endless coffee ☕ 
</p>
<br />
            <p>
              © 2025 Ravi Dev. All rights reserved.
              </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 