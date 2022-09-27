import React from 'react';
import './About.css';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img src="./images/evangelion.png" alt="" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            I'm Bleer Rodriguez, a web designer and desktop application
            developer in Costa Rica.
          </p>

          <a href="#curriculum" className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
