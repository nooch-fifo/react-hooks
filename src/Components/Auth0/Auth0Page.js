import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Auth0Page() {
    return (
        <div className="Auth">
            <LoginButton />
            <LogoutButton />
        </div>
    )
}

export default Auth0Page;