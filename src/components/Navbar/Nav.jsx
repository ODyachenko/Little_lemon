import logo from '../../assets/img/logo.svg';
import './style.css';

function Nav() {
  return (
    <nav className="nav block">
      <div className="container">
        <img src={logo} alt="Logo" />
        <button className="nav__burger burger">
          <span className="burger__item"></span>
        </button>
        <ul className="nav__list">
          <li>
            <a className="nav__list-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Menu
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Reservations
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Order online
            </a>
          </li>
          <li>
            <a className="nav__list-link" href="/">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
