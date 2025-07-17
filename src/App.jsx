import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';


import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Skills from '../src/pages/skills';
import CertificateExperience from '../src/pages/certificate_exp';
import Projects from '../src/pages/projects';
import Resume from '../src/pages/resume';
import Contact from '../src/pages/contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificate-experience" element={<CertificateExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
