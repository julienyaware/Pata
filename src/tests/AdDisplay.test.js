import React from 'react';
import { render, screen } from '@testing-library/react';
import AdDisplay from '../components/AdDisplay';

describe('AdDisplay Component Driven Testing', () => {
  test('renders component with expected behavior', () => {
    render(<AdDisplay/>);

    // Check if text content is rendered
    const boldTextElement = screen.getByText('GET GREAT SERVICES AT GREAT PRICES');
    expect(boldTextElement).toBeInTheDocument();

    const headingElement = screen.getByText('Find your service provider');
    expect(headingElement).toBeInTheDocument();

    const typedTextElement = screen.getByText('Get Fast, accessible clientelle and services');
    expect(typedTextElement).toBeInTheDocument();

    const infoTextElement = screen.getByText('Get service providers closest to you');
    expect(infoTextElement).toBeInTheDocument();

    // Check if button is rendered
    const buttonElement = screen.getByText('Find Services');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-[#1623CE] rounded-md font-medium w-[200px] my-4 mx-auto py-3 text-black');
  });

  test('renders ReactTyped animation', () => {
    render(<AdDisplay />);

    // Check if ReactTyped animation is rendered
    const typedTextElement = screen.getByText('Get Fast, accessible clientelle and services');
    expect(typedTextElement).toBeInTheDocument();
  });
});
