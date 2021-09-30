import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Auth0Profile from "./Auth0Profile";

function Auth0Page() {
    const { isLoading } = useAuth0;

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="Auth">
            <LoginButton />
            <LogoutButton />
            <Auth0Profile />
        </div>
    )
}

export default Auth0Page;