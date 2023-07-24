import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Booking form', () => {
  const handleSubmit = jest.fn();

  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Reservation details');

    expect(headingElement).toBeInTheDocument();
  });

  test('Submission is disabled if name less than 2 characters', () => {
    render(<BookingForm />);
    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, '1');

    const submitBtn = screen.getByText('Confirm reservation');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("Submission is disabled if email doesn't match the RegExp", () => {
    render(<BookingForm />);
    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, 'email');

    const submitBtn = screen.getByText('Confirm reservation');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('Submission is disabled if no date is selected', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Choose date/);

    const submitBtn = screen.getByText('Confirm reservation');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
