import { useNavigate } from 'react-router-dom';
import './style.css';

function Confirmed() {
  const navigate = useNavigate();

  function onClickBtnHandler() {
    navigate('/');
  }

  return (
    <section className="confirmed-booking block">
      <div className="container">
        <div className="confirmed-booking__inner">
          <svg
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_160)">
              <path
                d="M110.961 19.0389C85.5758 -6.34639 44.4186 -6.34639 19.0386 19.0394C-6.34638 44.4245 -6.34639 85.5814 19.0397 110.961C44.4186 136.346 85.5758 136.346 110.961 110.961C136.346 85.5814 136.346 44.4245 110.961 19.0389ZM103.301 103.3C82.1463 124.455 47.8491 124.455 26.7 103.301C5.54506 82.1511 5.54506 47.854 26.6995 26.6995C47.8491 5.5448 82.1463 5.5448 103.301 26.6995C124.455 47.8542 124.455 82.1511 103.301 103.3Z"
                fill="white"
              />
              <path
                d="M93.6688 39.5043L59.5824 73.5907L41.746 55.7543C39.6307 53.639 36.201 53.639 34.0857 55.7543C31.9704 57.8695 31.9704 61.2993 34.0857 63.4146L55.7522 85.0812C57.8675 87.1965 61.2973 87.1965 63.4126 85.0812L101.329 47.1646C103.444 45.0493 103.444 41.6195 101.329 39.5043C99.2139 37.389 95.7841 37.389 93.6688 39.5043Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_160">
                <rect width="130" height="130" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2 className="confirmed-booking__title title">Thank you!</h2>
          <p className="confirmed-booking__text">
            Your reservation requirment was succesfully Submitted!
            Check&nbsp;your email for details
          </p>
        </div>
        <button
          onClick={onClickBtnHandler}
          className="confirmed-booking__btn primary-btn"
        >
          Go back to Home&nbsp;screen
        </button>
      </div>
    </section>
  );
}

export default Confirmed;
