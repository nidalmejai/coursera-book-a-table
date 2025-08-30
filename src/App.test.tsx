import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header with Little Lemon logo', () => {
    render(<App />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('LITTLE LEMON')).toBeInTheDocument();
  });

  test('renders main content with booking form', () => {
    render(<App />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Book A Table')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('renders restaurant image section', () => {
    render(<App />);
    
    expect(screen.getByLabelText('Restaurant interior')).toBeInTheDocument();
    expect(screen.getByText('Restaurant Interior')).toBeInTheDocument();
  });

  test('renders footer with Little Lemon logo', () => {
    render(<App />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    const footerLogos = screen.getAllByText('LITTLE LEMON');
    expect(footerLogos).toHaveLength(2); // One in header, one in footer
  });

  test('has proper semantic structure', () => {
    render(<App />);
    
    // Check for main landmark
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check for sections within main
    const main = screen.getByRole('main');
    expect(main.querySelector('.booking-section')).toBeInTheDocument();
    expect(main.querySelector('.image-section')).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    render(<App />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Prename')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Year')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Month')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Dinners')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });
});
