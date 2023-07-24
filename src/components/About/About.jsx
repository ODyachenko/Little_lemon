import { Link } from 'react-router-dom';
import about1 from '../../assets/img/about1.jpg';
import about2 from '../../assets/img/about2.jpg';
import './style.css';

function About() {
  return (
    <section className="about block">
      <div className="container">
        <div className="about__content">
          <h1 className="about__title title">Little Lemon</h1>
          <h2 className="about__subtitle subtitle">Chicago</h2>
          <p className="about__lead-text lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link to="/reservation" className="about__btn primary-btn">
            Reserve a Table
          </Link>
        </div>
        <div className="about__promo">
          <img className="about__promo-img" src={about1} alt="Chefs foto" />
          <img className="about__promo-img" src={about2} alt="Chefs foto" />
        </div>
      </div>
    </section>
  );
}

export default About;
