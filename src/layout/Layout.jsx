import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <h1 className="name">Bleer Rodriguez B.</h1>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/home" className="nav__link">
                  <i className="uil uil-home uil__icon"></i> Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                  <i className="uil uil-user uil__icon"></i> About
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/skills" className="nav__link">
                  <i className="uil uil-file-alt uil__icon"></i> Skills
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/resume" className="nav__link">
                  <i className="uil uil-briefcase-alt uil__icon"></i> Services
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="#portafolio" className="nav__link">
                  <i className="uil uil-scenery uil__icon"></i> Portfolio
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                  <i className="uil uil-message uil__icon"></i> Contact
                </NavLink>
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
