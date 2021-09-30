import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
        </div>
    );
};

export default LogoutButton;