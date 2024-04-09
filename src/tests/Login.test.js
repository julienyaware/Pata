import { render, screen } from '@testing-library/react';
import { Login,validateEmail } from '../components/Login';


describe("login", () => {
    test("validate login function should pass on correct input for email", () => {
        const text = "text@test.com";
        expect(validateEmail(text)).toBe(true);
            });
});