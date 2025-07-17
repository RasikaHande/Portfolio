import React from 'react';
import './projects.css';

const selfProjects = [
  {
    name: 'Quiz Application',
    github: 'https://github.com/yourusername/quiz-app',
    demo: 'https://quiz-app.netlify.app',
  },
  {
    name: 'Stopwatch',
    github: 'https://github.com/yourusername/stopwatch',
    demo: 'https://stopwatch-app.netlify.app',
  },
  {
    name: 'Kanban Board',
    github: 'https://github.com/yourusername/kanban-board',
    demo: 'https://kanban-board.netlify.app',
  },
  {
    name: 'Conference Website',
    github: 'https://github.com/yourusername/conference-website',
    demo: 'https://conference-website.netlify.app',
  },
  {
    name: 'Weather App',
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather-app.netlify.app',
  },
  {
    name: 'ToDo List',
    github: 'https://github.com/yourusername/todo-list',
    demo: 'https://todo-list.netlify.app',
  },
  {
    name: 'Quora Clone',
    github: 'https://github.com/yourusername/quora-clone',
    demo: 'https://quora-clone.netlify.app',
  },
  {
    name: 'Hotel Booking App',
    github: 'https://github.com/yourusername/hotel-booking-app',
    demo: 'https://hotel-booking-app.netlify.app',
  },
  {
    name: 'Drum Kit',
    github: 'https://github.com/yourusername/drum-kit',
    demo: 'https://drum-kit.netlify.app',
  },
  {
    name: 'E-commerce Website for Selling Books',
    github: 'https://github.com/yourusername/book-ecommerce',
    demo: 'https://book-ecommerce.netlify.app',
  },
];

const internshipProjects = [
  { name: 'Virtual Art Gallery' },
  { name: 'Blog Website' },
  { name: 'Calculator' },
  { name: 'Recipe Book' },
  { name: 'Image Slider' },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="project-category">
          <h3>✨ Self Done Projects</h3>
          <ul className="project-list">
            {selfProjects.map((project, index) => (
              <li key={index}>
                <span>{project.name}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Source Code</a> | 
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <br /><br />

        <div className="project-category">
          <h3>🚀 Ongoing Internship Projects</h3>
          <p>(Currently being developed individually without mentor support. Expected to be completed within a month.)</p>
          <ul className="project-list">
            {internshipProjects.map((project, index) => (
              <li key={index}>
                <span>{project.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
