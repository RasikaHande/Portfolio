import React from 'react';
import './certificate_exp.css';

const CertificateExperience = () => {
  return (
    <section className="cert-exp-section">
      <div className="cert-exp-container">
        <h2>Certificate & Experience</h2>
        
        <div className="experience">
          <h3>🎓 Internship</h3>
          <p>
            <strong>Unified Mentor</strong> — 3-Month Internship (Ongoing)<br />
            Role: <strong>Full Stack Developer Intern</strong><br />
            I'm currently working on multiple real-world projects using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB under the guidance of industry mentors.
          </p>
        </div>

        <div className="certificate">
          <h3>📜 Upcoming Certificate</h3>
          <p>
            <strong>Skill Academy by Testbook</strong><br />
            Full Stack Web Development Course (To be received within this month)<br />
            This course includes training in modern frontend & backend technologies, hands-on projects, and developer best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificateExperience;
