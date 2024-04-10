import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { validateEmail } from '../components/Login';
import userEvent from '@testing-library/user-event';
import SignUp from '../components/SignUp';

describe("Basis Path Testing Sign Up Component", () => {
    it('renders the Sign Up form in signup Page', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>);
        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();

        const emailInput = screen.getByPlaceholderText('Email address');
        expect(emailInput).toBeInTheDocument();

        const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
        expect(confirmPasswordInput).toBeInTheDocument();

    });

    it('allows user to enter email in the email input sign up form', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'emailexample' } });
        expect(emailInput.value).toBe('emailexample');
    });

    it('allows user to enter password in the password input on sign up form', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'passwordexample' } });
        expect(passwordInput.value).toBe('passwordexample');
    });

    // it('calls onLogin prop with username and password when login button is clicked', async () => {
    //     const mockOnLogin = jest.fn();
    //     render(<MemoryRouter>
    //         <Login onLogin={mockOnLogin} />
    //     </MemoryRouter>);

    //     fireEvent.change(screen.getByPlaceholderText('Email address'), 'test@mail.com');
    //     fireEvent.change(screen.getByPlaceholderText('Password'), 'password123');

    //     fireEvent.click(screen.getByRole('button'));

    //     await waitFor(() => expect(mockOnLogin).toHaveBeenCalledTimes(1));

    // });


})

describe("Sign up component - Equivalence Class testing / Boundary value testing", () => {
    test('displays error message for empty email address', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>);

        const signupbutton = screen.getByRole('button');
        fireEvent.click(signupbutton);

        expect(screen.getByText('Email Address is required')).toBeInTheDocument();
    });

    test('displays error message for empty  password', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>);

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'juliet@mail' } });

        const signupbutton = screen.getByRole('button');
        fireEvent.click(signupbutton);

        expect(screen.getByText('Password is required')).toBeInTheDocument();
    });

    // test('displays error message for length of password if it is too short', () => {
    //     render(<MemoryRouter>
    //         <SignUp />
    //     </MemoryRouter>);

    //     const emailInput = screen.getByPlaceholderText('Email address');
    //     fireEvent.change(emailInput, { target: { value: 'juliet@mail' } });

    //     const passwordInput = screen.getByPlaceholderText('Password');
    //     fireEvent.change(passwordInput, { target: { value: '123' } });

    //     const signupbutton = screen.getByRole('button');
    //     fireEvent.click(signupbutton);

    //     expect(screen.getByText('Password should be at least 6 characters')).toBeInTheDocument();
    // });

    test('displays error password and email longer than 50 and 100 characters respectively', () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>);

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'a'.repeat(51) } });

        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: '1'.repeat(101) } });

        const signupbutton = screen.getByRole('button');
        fireEvent.click(signupbutton);

        expect(screen.getByText('Username must be at most 50 characters and password at most 100 characters')).toBeInTheDocument();
    });

    // test('displays error message for invalid username and password combination', () => {
    //     render(<MemoryRouter>
    //         <SignUp />
    //     </MemoryRouter>);

    //     const emailInput = screen.getByPlaceholderText('Email address');
    //     fireEvent.change(emailInput, { target: { value: 'invalidusername' } });

    //     const passwordInput = screen.getByPlaceholderText('Password');
    //     fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });

    //     const signupbutton = screen.getByRole('button');
    //     fireEvent.click(signupbutton);

    //     expect(screen.getByText('You entered a wrong username or password.')).toBeInTheDocument();
    // });
})