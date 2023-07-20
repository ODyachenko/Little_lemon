import logo from '../../assets/img/footer_logo.svg';
import './style.css';

function Footer() {
  return (
    <footer className="footer block">
      <div className="container">
        <img className="footer__logo" src={logo} alt="Logo" />
        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li>Doormat Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
          <ul className="footer__nav-list">
            <li>Contact</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>
          </ul>
          <ul className="footer__nav-list">
            <li>Social media links</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
