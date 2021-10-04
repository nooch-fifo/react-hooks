import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div className="container">
                <h2 className="text-center text-primary text-capitalize" style={{ marginBottom: 50 }}>Auth0 Admin Page</h2>
                <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>
            </div>
        )
    );
};

export default LoginButton;