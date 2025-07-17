import React from 'react';
import './Skills.css';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MongoDB Atlas',
  'Postman',
  'VS Code',
  'Git & GitHub',
  'Netlify',
  'Responsive Design',
  'UI/UX Design',
  'Efficient use of ChatGPT for raw data',
  'REST APIs',
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          These are the technologies and tools I’ve worked with while building full-stack projects.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
