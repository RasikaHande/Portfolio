
import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h2>My Resume</h2>
        <p>You can view or download my resume from the link below.</p>
        <a
          href="/Rasika_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
