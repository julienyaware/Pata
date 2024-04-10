// import { render, screen } from '@testing-library/react';
// import App from './App';

// // App.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// test('renders home page by default', () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const homeElement = screen.getByText(/Welcome to the Home Page/i);
//   expect(homeElement).toBeInTheDocument();
// });

// test('renders about page when navigating to /about', () => {
//   window.history.pushState({}, 'About Page', '/about');
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const aboutElement = screen.getByText(/This is the About Page/i);
//   expect(aboutElement).toBeInTheDocument();
// });

// test('renders contact page when navigating to /contact', () => {
//   window.history.pushState({}, 'Contact Page', '/contact');
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const contactElement = screen.getByText(/Contact Us/i);
//   expect(contactElement).toBeInTheDocument();
// });
