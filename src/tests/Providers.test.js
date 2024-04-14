import React from 'react';
import { render, waitFor,screen } from '@testing-library/react';
import Providers from '../components/Providers';


// Mock Firebase Firestore
jest.mock('../Firabase', () => ({
  db: {
    collection: jest.fn(() => ({
      getDocs: jest.fn(() => ({
        forEach: jest.fn(),
      })),
    })),
  },
}));

describe('Providers Component', () => {
  test('renders loading indicator while fetching data', async () => {
   render(<Providers />)
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

//   test('renders categories when data is fetched successfully', async () => {
//     const mockData = {
//       provider1: { name: 'Provider 1', ...otherProps },
//       provider2: { name: 'Provider 2', ...otherProps },
//     };
//     jest.spyOn(global, 'console').mockImplementation(() => {}); // Suppress console output

//     // Mock the getDocs function to return mock data
//     jest.spyOn(db, 'collection').mockReturnValueOnce({
//       getDocs: jest.fn(() => ({
//         forEach: jest.fn((callback) => {
//           Object.keys(mockData).forEach((key) => callback({ id: key, data: () => mockData[key] }));
//         }),
//       })),
//     });

//    render(<Providers />);
//     await waitFor(() => {
//       expect(screen.getByText('Provider 1')).toBeInTheDocument();
    
//     });
//   });

//   test('handles error gracefully', async () => {
//     // Mocking error scenario
//     jest.spyOn(global.console, 'log').mockImplementation(() => {}); // Suppress console.log output
//     jest.spyOn(db, 'collection').mockReturnValueOnce({
//       getDocs: jest.fn(() => {
//         throw new Error('Error fetching data');
//       }),
//     });

//    render(<Providers />);
//     await waitFor(() => {
//       expect(screen.getByText('Error fetching data')).toBeInTheDocument();
//     });
//   });
});
