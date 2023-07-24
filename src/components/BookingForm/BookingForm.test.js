import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import BookingForm from './BookingForm';

jest.mock('axios');

describe('Booking form', () => {
  const handleSubmit = jest.fn();

  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Reservation details');

    expect(headingElement).toBeInTheDocument();
  });

  test('Submission is disabled if name less than 2 characters', () => {
    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, '1');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('Submission is allowed if name >= than 2 characters', () => {
    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, '12');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalled();
  });

  test("Submission is disabled if email doesn't match the RegExp", () => {
    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, 'email');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('Submission is allowed if email match the RegExp', () => {
    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, 'test@gmail.com');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalled();
  });

  test('Submission is disabled if no date is selected', () => {
    const dateInput = screen.getByLabelText(/Choose date/);
    // fireEvent.change(dateInput, '');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('Submission is allowed if date is selected', () => {
    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, '2023.07.24');

    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
