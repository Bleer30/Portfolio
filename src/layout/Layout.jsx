import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Bleer Rodriguez B.
          </a>

          <div className="nav__menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="/home" className="nav__link">
                  <i className="uil uil-home uil__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="/about" className="nav__link">
                  <i className="uil uil-user uil__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="/skills" className="nav__link">
                  <i className="uil uil-file-alt uil__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="/resume" className="nav__link">
                  <i className="uil uil-briefcase-alt uil__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portafolio" className="nav__link">
                  <i className="uil uil-scenery uil__icon"></i> Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="/contact" className="nav__link">
                  <i className="uil uil-message uil__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i className="uil uil-times nav-close"></i>
          </div>

          <div className="nav-toggle">
            <i className="uil uil-apps"></i>
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
