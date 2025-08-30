import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders footer with logo and title', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('LITTLE LEMON')).toBeInTheDocument();
  });

  test('has proper semantic structure', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    
    const logoText = screen.getByText('LITTLE LEMON');
    expect(logoText.tagName).toBe('H2');
  });

  test('contains logo elements', () => {
    render(<Footer />);
    
    const logo = screen.getByText('LITTLE LEMON').closest('.logo');
    expect(logo).toBeInTheDocument();
    
    expect(document.querySelector('.lemon-icon')).toBeInTheDocument();
    expect(document.querySelector('.lemon-shape')).toBeInTheDocument();
    expect(document.querySelector('.leaf')).toBeInTheDocument();
  });

  test('has proper CSS classes for styling', () => {
    render(<Footer />);
    
    expect(document.querySelector('.footer')).toBeInTheDocument();
    expect(document.querySelector('.footer-content')).toBeInTheDocument();
  });
});
