import Button from '../../UI/Button';
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
          <Button value="Reserve a Table" />
        </div>
        <div className="about__promo"></div>
        <img className="about__promo-img" src={about1} alt="Chefs foto" />
        <img className="about__promo-img" src={about2} alt="Chefs foto" />
      </div>
    </section>
  );
}

export default About;
