import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders component with correct content', () => {
    render(<Footer />);

    // Check if text content is rendered
    const headingElement = screen.getByText('NIPATE');
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/Lorem ipsum dolor/i);
    expect(paragraphElement).toBeInTheDocument();

    
  })
})