import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProfileHomepage from '../components/ProfileHomepage';



describe('ProfileHomepage Component', () => {
  test('renders ProfileHomepage with tabs', () => {
    render(<ProfileHomepage />);
    expect(screen.getByText('PROFILE')).toBeInTheDocument();
    expect(screen.getByText('UPLOAD IMAGES')).toBeInTheDocument();
    expect(screen.getByText('REVIEWS')).toBeInTheDocument();
  });

//   test('switches tabs on click', () => {
//     const { getByText, getByRole } = render(<ProfileHomepage />);
//     fireEvent.click(getByText('UPLOAD IMAGES'));
//     expect(getByRole('tabpanel', { hidden: false })).toHaveTextContent('ProfileImageUpload');
//     fireEvent.click(getByText('REVIEWS'));
//     expect(getByRole('tabpanel', { hidden: false })).toHaveTextContent('ProfileComments');
//     fireEvent.click(getByText('PROFILE'));
//     expect(getByRole('tabpanel', { hidden: false })).toHaveTextContent('ProfileTabs');
//   });

//   test('renders ProfileImageUpload component when Upload Images tab is active', () => {
//     const { getByText } = render(<ProfileHomepage />);
//     fireEvent.click(getByText('UPLOAD IMAGES'));
//     expect(getByText('ProfileImageUpload')).toBeInTheDocument();
//   });

//   test('renders ProfileComments component when Reviews tab is active', () => {
//     const { getByText } = render(<ProfileHomepage />);
//     fireEvent.click(getByText('REVIEWS'));
//     expect(getByText('ProfileComments')).toBeInTheDocument();
//   });
});
