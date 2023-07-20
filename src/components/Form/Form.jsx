import { useState } from 'react';
import './style.css';

function Form() {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    ocasion: '',
    visiters: 1,
  });

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function onChangeFieldHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  return (
    <section className="reservation block">
      <div className="container">
        <h2 className="reservation__title title">Reservation details</h2>
        <form action="/" className="reservation__form form">
          <label className="form__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChangeFieldHandler}
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <label className="form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeFieldHandler}
              required
            />
          </label>
          <label className="form__field">
            <span>Choose date</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChangeFieldHandler}
              required
            />
          </label>
          <label className="form__field">
            <span>Choose time</span>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={onChangeFieldHandler}
              required
            />
          </label>
          <select
            name="ocasion"
            value={formData.ocasion}
            onChange={onChangeFieldHandler}
            className="form__select"
          >
            <option>Ocasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Aniversary</option>
          </select>
          <select className="form__select">
            <option value="">Inside</option>
            <option value="">Outside</option>
          </select>
          <div className="form__visiters">
            <span>Table for</span>
            <div className="form__count">
              <button
                onClick={decrementCount}
                type="button"
                className="form__count-btn"
              >
                -
              </button>
              <span className="form__count-num">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                type="button"
                className="form__count-btn"
              >
                +
              </button>
            </div>
          </div>
          <button className="form__btn primary-btn" type="submit">
            Confirm reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
