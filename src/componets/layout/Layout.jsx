import { useState } from 'react';
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <h1 className="nav__logo">Bleer</h1>

          <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <NavLink to="/home" className="nav__link active-link">
                  <i className="uil uil-home nav__icon"></i> Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </NavLink>
              </li>
            </ul>

            <i
              className="uil uil-times nav-close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav-toggle">
            <i className="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
          </div>
        </nav>
      </header>
      <div className="container3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
