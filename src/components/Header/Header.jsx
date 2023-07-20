import Button from '../../UI/Button';
import promo from '../../assets/img/promo.jpg';
import './style.css';

function Header() {
  return (
    <header className="header block">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title title">Little Lemon</h1>
          <h2 className="header__subtitle subtitle">Chicago</h2>
          <h3 className="header__lead-text lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </h3>
          <Button className="header__btn" value="Reserve a Table" />
        </div>
        <img className="header__promo" src={promo} alt="promo" />
      </div>
    </header>
  );
}

export default Header;
