import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { fixedNavbar } from '../../utils/fixedNavbar';
import './style.css';

function Nav() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    isShow
      ? document.body.classList.add('hide')
      : document.body.classList.remove('hide');
  }, [isShow]);

  // Fixed navbar
  useEffect(() => {
    if (document.documentElement.clientWidth > 768) {
      fixedNavbar();
    }
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        <img src={logo} alt="Logo" />
        <div
          onClick={() => setIsShow(!isShow)}
          className={`hamburger hamburger--squeeze ${isShow ? 'show' : ''}`}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <span className={`nav__overflow ${isShow ? 'show' : ''}`}></span>
        <ul className={`nav__list ${isShow ? 'show' : ''}`}>
          <li>
            <NavLink to="/" className="nav__list-link">
              Home
            </NavLink>
          </li>
          <li>
            <a href="/" className="nav__list-link">
              Menu
            </a>
          </li>
          <li>
            <NavLink to="/reservation" className="nav__list-link">
              Reservation
            </NavLink>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
