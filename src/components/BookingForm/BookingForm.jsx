import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function BookingForm({ availableTimes, setAvailableTimes }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: availableTimes[0],
    ocasion: 'Birthday',
    visiters: 1,
  });

  function onChangeFieldHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function incrementVisitersCount() {
    setFormData({ ...formData, visiters: formData.visiters + 1 });
  }
  function decrementVisitersCount() {
    formData.visiters > 1 &&
      setFormData({ ...formData, visiters: formData.visiters - 1 });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    // submitAPI(formData);
    navigate('/confirmed-booking');
    console.log(formData);
  }

  return (
    <section className="reservation block">
      <div className="container">
        <h2 className="reservation__title title">Reservation details</h2>
        <form className="reservation__form form" onSubmit={onSubmitHandler}>
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
            <select
              className="form__select"
              name="time"
              onChange={onChangeFieldHandler}
            >
              {availableTimes.map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="form__field">
            <span>Ocasion</span>
            <select
              name="ocasion"
              value={formData.ocasion}
              onChange={onChangeFieldHandler}
              className="form__select"
            >
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Aniversary</option>
            </select>
          </label>
          <label className="form__field">
            <span>Location</span>
            <select className="form__select">
              <option value="">Inside</option>
              <option value="">Outside</option>
            </select>
          </label>
          <div className="form__visiters">
            <span>Table for</span>
            <div className="form__count">
              <button
                onClick={decrementVisitersCount}
                type="button"
                disabled={formData.visiters === 1}
                className="form__count-btn"
              >
                -
              </button>
              <span className="form__count-num">{formData.visiters}</span>
              <button
                onClick={incrementVisitersCount}
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

export default BookingForm;
