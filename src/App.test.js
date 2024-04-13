import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import App from './App';

// Mock AuthContext
const mockAuthContextValue = {
    currentUser: { uid: 'user_id' } // Mocking a logged-in user
};

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App />);
    });

    test('renders NavBar and default route when user is not logged in', () => {
        render(
            <App />
        );

        // NavBar should be rendered
        const navBarElement = screen.getByText('Home');
        expect(navBarElement).toBeInTheDocument();

        // HomePage should be rendered by default
        const homePageElement = screen.getByText('GET GREAT SERVICES AT GREAT PRICES');
        expect(homePageElement).toBeInTheDocument();
    });



    //   test('renders Navigation Bar and the ProfileHomepage route when user is logged in', () => {
    //     render(

    //             <AuthContext.Provider value={mockAuthContextValue}>
    //             <App />
    //             </AuthContext.Provider>

    //     );

    //     // const navBarElement = screen.getByText('/Home/i');
    //     // expect(navBarElement).toBeInTheDocument();

    //     // ProfileHomepage should be rendered when logged in
    //     const profileHomepageElement = screen.getByText('/Profile/i');
    //     expect(profileHomepageElement).toBeInTheDocument();
    //   });


});
