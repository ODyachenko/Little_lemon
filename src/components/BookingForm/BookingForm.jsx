import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const initializeTimes = [
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];

function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState(initializeTimes);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: availableTimes[0],
    ocasion: 'Birthday',
    visiters: 1,
  });

  useEffect(() => {
    if (formData.date) {
      fetch('https://64be2b4d2320b36433c826ac.mockapi.io/avialableTimes')
        .then((res) => res.json())
        .then((data) => setAvailableTimes(data))
        .catch((err) => console.error('Error:', err.message));
    }
  }, [formData.date]);

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
    navigate('/confirmed-booking');
  }

  return (
    <section className="reservation block">
      <div className="container">
        <h2 className="reservation__title title">Reservation details</h2>
        <form className="reservation__form form" onSubmit={onSubmitHandler}>
          <label
            className="form__field"
            onBlur={(event) => event.target.classList.add('active')}
            aria-label="On click"
          >
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
          <label
            className="form__field"
            onBlur={(event) => event.target.classList.add('active')}
            aria-label="On click"
          >
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeFieldHandler}
              required
            />
          </label>
          <label
            className="form__field"
            onBlur={(event) => event.target.classList.add('active')}
            aria-label="On click"
          >
            <span>Choose date</span>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChangeFieldHandler}
              required
            />
          </label>
          <label className="form__field" aria-label="On click">
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
          <label className="form__field" aria-label="On click">
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
          <label className="form__field" aria-label="On click">
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
