import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
     
         <img src="/image/rasika.jpg" alt="Rasika Hande" />

        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm <strong>Rasika Hande</strong>, a BCA graduate and passionate Full Stack Developer. <br />
            I love building interactive, responsive web applications using HTML5, CSS3, JavaScript,
            React.js, Node.js, Express.js and MongoDB. I'm always eager to learn and grow while contributing
            to impactful projects.
          </p>
          <p>
            I aim to join a dynamic company where I can contribute my skills and grow in a
            collaborative environment.
          </p>
        </div>

         <div className="education-section">
            <h3>🎓 Education</h3>
            <ul className="education-list">
              <li><strong>BCA (2022–2025):</strong> 71.74% — MCA Pursuing</li>
              <li><strong>HSC (March 2022):</strong> 73.33%</li>
              <li><strong>SSC (March 2020):</strong> 85.40%</li>
              <li><strong>Full Stack Developer (Skill Academy):</strong> Student</li>
            </ul>
          </div>
      </div>
    </section>
  );
};

export default About;
