import { useAuth0 } from "@auth0/auth0-react";
import './login.css';

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

    return(
        <button onClick={() => loginWithRedirect()}>Log in</button>
    )

};

export default LoginButton;
