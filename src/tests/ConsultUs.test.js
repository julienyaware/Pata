import React from 'react';
import { render, screen } from '@testing-library/react';
import ConsultUs from '../components/ConsultUs';

describe('ConsultUs Component driven testing', () => {
  test('renders component with correct content', () => {
    render(<ConsultUs />);

    const headingElement = screen.getByText('Want to save some money for small issues you can fix by yourself?');
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('Get instructions from our bot on how to do it yourself.');
    expect(paragraphElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Ask Us Anything!');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-[#1623CE] rounded-md font-medium w-[200px] my-4 mx-auto py-3 text-black');
  });
});
