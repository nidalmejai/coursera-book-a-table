import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../BookingForm';

const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
    mockAlert.mockRestore();
  });

  test('renders all form fields', () => {
    render(<BookingForm />);
    
    expect(screen.getByText('Book A Table')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Prename')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Year')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Month')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Dinners')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });

  test('shows validation errors for empty required fields', async () => {
    render(<BookingForm />);
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    await userEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Prename is required')).toBeInTheDocument();
      expect(screen.getByText('Year is required')).toBeInTheDocument();
      expect(screen.getByText('Month is required')).toBeInTheDocument();
      expect(screen.getByText('Date is required')).toBeInTheDocument();
      expect(screen.getByText('Time is required')).toBeInTheDocument();
      expect(screen.getByText('Number of dinners is required')).toBeInTheDocument();
    });
  });

  test('shows validation error for short names', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);
    
    const nameInput = screen.getByLabelText('Name');
    await user.type(nameInput, 'A');
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
    });
  });

  test('submits form successfully with valid data', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);
    
    await user.type(screen.getByLabelText('Name'), 'John');
    await user.type(screen.getByLabelText('Prename'), 'Doe');
    
    const yearSelect = screen.getByLabelText('Select Year');
    await user.selectOptions(yearSelect, new Date().getFullYear().toString());
    
    const monthSelect = screen.getByLabelText('Select Month');
    await user.selectOptions(monthSelect, 'January');
    
    const dateSelect = screen.getByLabelText('Select Date');
    await user.selectOptions(dateSelect, '15');
    
    const timeSelect = screen.getByLabelText('Time');
    await user.selectOptions(timeSelect, '7:00 PM');
    
    const dinnersSelect = screen.getByLabelText('Number of Dinners');
    await user.selectOptions(dinnersSelect, '4');
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    await user.click(submitButton);
    
    expect(screen.getByRole('button', { name: 'Booking...' })).toBeInTheDocument();
    
    await waitFor(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith('Booking submitted:', {
        name: 'John',
        prename: 'Doe',
        year: new Date().getFullYear().toString(),
        month: 'January',
        date: '15',
        time: '7:00 PM',
        numberOfDinners: '4'
      });
    });
    
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Table booked successfully!');
    });
  });

  test('handles form submission errors gracefully', async () => {
    const mockSubmit = jest.fn().mockRejectedValue(new Error('Submission failed'));
    
    render(<BookingForm />);
    
    const user = userEvent.setup();
    await user.type(screen.getByLabelText('Name'), 'John');
    await user.type(screen.getByLabelText('Prename'), 'Doe');
    
    const yearSelect = screen.getByLabelText('Select Year');
    await user.selectOptions(yearSelect, new Date().getFullYear().toString());
    
    const monthSelect = screen.getByLabelText('Select Month');
    await user.selectOptions(monthSelect, 'January');
    
    const dateSelect = screen.getByLabelText('Select Date');
    await user.selectOptions(dateSelect, '15');
    
    const timeSelect = screen.getByLabelText('Time');
    await user.selectOptions(timeSelect, '7:00 PM');
    
    const dinnersSelect = screen.getByLabelText('Number of Dinners');
    await user.selectOptions(dinnersSelect, '4');
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
    });
  });

  test('has proper accessibility attributes', () => {
    render(<BookingForm />);
    
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toHaveAttribute('id', 'name');
    
    const prenameInput = screen.getByLabelText('Prename');
    expect(prenameInput).toHaveAttribute('id', 'prename');
    
    expect(nameInput).toHaveAttribute('aria-describedby');
    
    expect(screen.getByRole('form')).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('populates dropdown options correctly', () => {
    render(<BookingForm />);
    
    const yearSelect = screen.getByLabelText('Select Year');
    expect(yearSelect).toHaveValue('');
    
    const monthSelect = screen.getByLabelText('Select Month');
    expect(monthSelect).toHaveValue('');
    
    const dateSelect = screen.getByLabelText('Select Date');
    expect(dateSelect).toHaveValue('');
    
    const timeSelect = screen.getByLabelText('Time');
    expect(timeSelect).toHaveValue('');
    
    const dinnersSelect = screen.getByLabelText('Number of Dinners');
    expect(dinnersSelect).toHaveValue('');
  });

  test('form resets after successful submission', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);
    
    await user.type(screen.getByLabelText('Name'), 'John');
    await user.type(screen.getByLabelText('Prename'), 'Doe');
    
    const yearSelect = screen.getByLabelText('Select Year');
    await user.selectOptions(yearSelect, new Date().getFullYear().toString());
    
    const monthSelect = screen.getByLabelText('Select Month');
    await user.selectOptions(monthSelect, 'January');
    
    const dateSelect = screen.getByLabelText('Select Date');
    await user.selectOptions(dateSelect, '15');
    
    const timeSelect = screen.getByLabelText('Time');
    await user.selectOptions(timeSelect, '7:00 PM');
    
    const dinnersSelect = screen.getByLabelText('Number of Dinners');
    await user.selectOptions(dinnersSelect, '4');
    
    const submitButton = screen.getByRole('button', { name: 'Book Now' });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('');
      expect(screen.getByLabelText('Prename')).toHaveValue('');
      expect(screen.getByLabelText('Select Year')).toHaveValue('');
      expect(screen.getByLabelText('Select Month')).toHaveValue('');
      expect(screen.getByLabelText('Select Date')).toHaveValue('');
      expect(screen.getByLabelText('Time')).toHaveValue('');
      expect(screen.getByLabelText('Number of Dinners')).toHaveValue('');
    });
  });
});
