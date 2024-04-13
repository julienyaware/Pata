import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from '../components/AboutUs';

describe('AboutUs Component Driven Testing', () => {
  test('renders About Us component with the expected behavior without interactions with other components', () => {
    render(<AboutUs />);
    
    // Check if the image is displayed with correct alt text for accessibility
    const imageElement = screen.getByAltText('service man');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'plumber.png');

    // Check if text content is well displayed
    const aboutNipateElement = screen.getByText('ABOUT NIPATE');
    expect(aboutNipateElement).toBeInTheDocument();

    const mainHeadingElement = screen.getByText('Where Service Providers Are Linked To Their Clientelle Easily.');
    expect(mainHeadingElement).toBeInTheDocument();

    // Check if register button is available and the styling is correct
    const registerButtonElement = screen.getByText('Register');
    expect(registerButtonElement).toBeInTheDocument();
    expect(registerButtonElement).toHaveClass('bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3 md:mx-0 text-[#1623CE]');
  });
});
