import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div><h1>Loading...</h1></div>
    }

    return (
        isAuthenticated && (
            <div className="container" style={{marginTop:100}}>
                <h4>See you soon, {user.name} !</h4>
            </div>
        )
    );
};

export default Auth0Profile;