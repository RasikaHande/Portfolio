import React from 'react';
import '../pages/Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1 className="slide-in-top">
          Hi, I'm <span className="highlight">Rasika Hande</span>
        </h1>
        <p className="fade-in">
          A passionate Full Stack Developer skilled in React.js, Node.js, and MongoDB.<br />
          I create responsive, clean, and impactful web applications.
        </p>
        <a href="/resume" className="btn pulse">View Resume</a>
      </div>
    </section>
  );
};

export default Home;
