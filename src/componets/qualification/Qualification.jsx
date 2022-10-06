import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <section>
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualiification-tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{' '}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification-button qualification-active button--flex'
                : 'qualification-button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>{' '}
            Experience
          </div>
        </div>

        <div className="qualification-sections">
          <div
            className={
              toggleState === 1
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Licenciatura of systems engineering
                </h3>
                <span className="qualification-subtitle">
                  Universidad Internacional San Isidro Labrador
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">
                  Bachelor of systems engineering
                </h3>
                <span className="qualification-subtitle">
                  Universidad Internacional San Isidro Labrador
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">High School degree</h3>
                <span className="qualification-subtitle">
                  Liceo Los Angeles Pital
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2018
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Developer</h3>
                <span className="qualification-subtitle">SIM</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Freelancer</h3>
                <span className="qualification-subtitle">
                  to various people who needed my services
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
