import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What i offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">
                Product <br /> Designer
              </h3>
              <p className="services-modal-description">
                Service with more 3 years of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">Ui/Ux Designer</h3>
              <p className="services-modal-description">
                Service with more 3 years of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
            <div className="services-modal"></div>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services-modal active-modal'
                : 'services-modal'
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="Services-modal-tile">Visual Designer</h3>
              <p className="services-modal-description">
                Service with more 3 years of experience.Providing quality work
                to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
