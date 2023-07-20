import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './style.css';

const links = ['Home', 'Menu', 'About', 'Testimonials', 'Contacts'];

function Nav() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('hide');
  }, [isShow]);

  // Fixed navbar
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.nav').style.top = '0';
      } else {
        document.querySelector('.nav').style.top = '-90px';
      }
      prevScrollpos = currentScrollPos;
    };
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
          {/* {links.map((link) => {
            return (
              <li key={link}>
                <a href={`#${link}`} className="nav__list-link">
                  {link}
                </a>
              </li>
            );
          })} */}
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
