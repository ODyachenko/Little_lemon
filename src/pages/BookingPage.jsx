import { useReducer, useState } from 'react';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';
import BookingForm from '../components/BookingForm/BookingForm';

// const reducer = (state, action) => {
//   return state
// }

function BookingPage() {
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
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  function updateTimes(availableTimes, action) {
    return availableTimes;
  }

  return (
    <>
      <Nav />
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
