import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reservation details');

  expect(headingElement).toBeInTheDocument();
});
