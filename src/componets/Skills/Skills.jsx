import React from 'react';
import './Skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Qualification from '../qualification/Qualification';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
      <div>
        <Qualification />
      </div>
    </section>
  );
};

export default Skills;
