import { render, screen } from '@testing-library/react';
import Login from '../components/Login';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { validateEmail } from '../components/Login';
import userEvent from '@testing-library/user-event';

render(<MemoryRouter>
    <Login />
</MemoryRouter>);

describe("login", () => {
    test("validate login function should pass on correct input for email", () => {
        const text = "julliet@test.com";
        expect(validateEmail(text)).toBe(true);
    });
    test("validate login should return error and fail on incorrect input", () => {
        const text = "julliet";
        expect(validateEmail(text)).not.toBe(true);
    });
    test("login form exists in the component", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
        const emailInput = screen.getByPlaceholderText('Email address');
        expect(emailInput).toBeInTheDocument();
    });
});

describe("Basis Path Testing Login Component", () => {
    it('renders the login form in Login Page', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>);
        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();

        const emailInput = screen.getByPlaceholderText('Email address');
        expect(emailInput).toBeInTheDocument();

    });

    it('allows user to enter email in the email input login form', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'emailexample' } });
        expect(emailInput.value).toBe('emailexample');
    });

    it('allows user to enter password in the password input on login form', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
        const passwordInput = screen.getByPlaceholderText('Email address');
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

describe("Equivalence Class testing / Boundary value testing Login component", () => {
    test('displays error message for empty email address', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>);

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        expect(screen.getByText('Email Address is required')).toBeInTheDocument();
    });

    test('displays error message for empty  password', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>);

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'juliet@mail' } });

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        expect(screen.getByText('Password is required')).toBeInTheDocument();
    });

    test('displays error message for length of password if it is too short', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>);

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'juliet@mail' } });

        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: '123' } });

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        expect(screen.getByText('Password should be at least 6 characters')).toBeInTheDocument();
    });

    test('displays error password and email longer than 50 and 100 characters respectively', () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>);

        const emailInput = screen.getByPlaceholderText('Email address');
        fireEvent.change(emailInput, { target: { value: 'a'.repeat(51) } });

        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: '1'.repeat(101) } });

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);

        expect(screen.getByText('Username must be at most 50 characters and password at most 100 characters')).toBeInTheDocument();
    });

    // test('displays error message for invalid username and password combination', () => {
    //     render(<MemoryRouter>
    //         <Login />
    //     </MemoryRouter>);

    //     const emailInput = screen.getByPlaceholderText('Email address');
    //     fireEvent.change(emailInput, { target: { value: 'invalidusername' } });

    //     const passwordInput = screen.getByPlaceholderText('Password');
    //     fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });

    //     const loginButton = screen.getByRole('button');
    //     fireEvent.click(loginButton);

    //     expect(screen.getByText('You entered a wrong username or password.')).toBeInTheDocument();
    // });
})