import React from 'react';
import { screen, render } from '@testing-library/react';
import LoginButton from '../Components/Auth0/LoginButton';

test("testing Auth0 Login Button", () => {

    render(<LoginButton />);

    expect(
        screen.getByText(/Login/)
    ).toBeInTheDocument();

})