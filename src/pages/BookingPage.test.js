import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingPage from './BookingPage';

test('Check what function are return', () => {
  render(<BookingPage />);
});
