import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('renders header with logo and title', () => {
    render(<Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('LITTLE LEMON')).toBeInTheDocument();
  });

  test('has proper semantic structure', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    const logoText = screen.getByText('LITTLE LEMON');
    expect(logoText.tagName).toBe('H1');
  });

  test('contains logo elements', () => {
    render(<Header />);
    
    // Check if logo container exists
    const logo = screen.getByText('LITTLE LEMON').closest('.logo');
    expect(logo).toBeInTheDocument();
    
    // Check if lemon icon elements exist
    expect(document.querySelector('.lemon-icon')).toBeInTheDocument();
    expect(document.querySelector('.lemon-shape')).toBeInTheDocument();
    expect(document.querySelector('.leaf')).toBeInTheDocument();
  });

  test('has proper CSS classes for styling', () => {
    render(<Header />);
    
    expect(document.querySelector('.header')).toBeInTheDocument();
    expect(document.querySelector('.header-content')).toBeInTheDocument();
    expect(document.querySelector('.header-divider')).toBeInTheDocument();
  });
});
