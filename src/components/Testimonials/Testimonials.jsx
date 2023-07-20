import rating from '../../assets/img/rating.svg';
import review1 from '../../assets/img/review1.jpg';
import review2 from '../../assets/img/review2.jpg';
import review3 from '../../assets/img/review3.jpg';
import './style.css';

function Testimonials() {
  return (
    <section className="testimonials block">
      <div className="container">
        <h2 className="testimonials__title title">Testimonials</h2>
        <ul className="testimonials__list">
          <li className="testimonials__list-item testimonial">
            <img className="testimonial__rating" src={rating} alt="Rating" />
            <div className="testimonial__inner">
              <img className="testimonial__ava" src={review1} alt="Avatar" />
              <h3 className="testimonial__name">Lavada Kunde</h3>
            </div>
            <p className="testimonial__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </li>
          <li className="testimonials__list-item testimonial">
            <img className="testimonial__rating" src={rating} alt="Rating" />
            <div className="testimonial__inner">
              <img className="testimonial__ava" src={review2} alt="Avatar" />
              <h3 className="testimonial__name">Ethyl Stehr</h3>
            </div>
            <p className="testimonial__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </li>
          <li className="testimonials__list-item testimonial">
            <img className="testimonial__rating" src={rating} alt="Rating" />
            <div className="testimonial__inner">
              <img className="testimonial__ava" src={review3} alt="Avatar" />
              <h3 className="testimonial__name">Harry Donnelly</h3>
            </div>
            <p className="testimonial__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
