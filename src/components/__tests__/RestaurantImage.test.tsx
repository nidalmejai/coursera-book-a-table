import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantImage from '../RestaurantImage';

describe('RestaurantImage', () => {
  test('renders restaurant image container', () => {
    render(<RestaurantImage />);
    
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    expect(screen.getByText('Restaurant Interior')).toBeInTheDocument();
  });

  test('has proper semantic structure', () => {
    render(<RestaurantImage />);
    
    const imageSection = screen.getByRole('img', { hidden: true });
    expect(imageSection).toBeInTheDocument();
  });

  test('contains table setup elements', () => {
    render(<RestaurantImage />);
    
    // Check if table setup elements exist
    expect(document.querySelector('.table-setup')).toBeInTheDocument();
    expect(document.querySelector('.table')).toBeInTheDocument();
    expect(document.querySelector('.placemat')).toBeInTheDocument();
    expect(document.querySelector('.plate')).toBeInTheDocument();
    expect(document.querySelector('.fork')).toBeInTheDocument();
    expect(document.querySelector('.knife')).toBeInTheDocument();
    expect(document.querySelector('.wine-glass')).toBeInTheDocument();
  });

  test('has proper CSS classes for styling', () => {
    render(<RestaurantImage />);
    
    expect(document.querySelector('.restaurant-image-container')).toBeInTheDocument();
    expect(document.querySelector('.restaurant-image-placeholder')).toBeInTheDocument();
    expect(document.querySelector('.image-content')).toBeInTheDocument();
    expect(document.querySelector('.image-overlay')).toBeInTheDocument();
  });

  test('displays multiple table setups', () => {
    render(<RestaurantImage />);
    
    const tableSetups = document.querySelectorAll('.table-setup');
    expect(tableSetups).toHaveLength(3);
    
    // Check for second and third table setups
    expect(document.querySelector('.table-setup.second')).toBeInTheDocument();
    expect(document.querySelector('.table-setup.third')).toBeInTheDocument();
  });
});
