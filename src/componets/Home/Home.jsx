import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container">
        <div className="home-content">
          <div className="home-content">
            <Social />

            <div className="home-img"></div>

            <Data />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
