import { useContext } from "react";
import { LoginFormContext } from "../../contexts/LoginForm.context";
import NetworksComponent from "./Networks.comp";

function SignInComponent() {
    const { formSignIn } = useContext(LoginFormContext);

    return (
        <section
            className={`sign-in ${formSignIn ? "" : "move-sign"}`}
            id="sign-in"
        >
            <h1>Sign in</h1>
            <NetworksComponent />
            <p>or use your account</p>
            <form action="#">
                <input
                    type="email"
                    name="Email"
                    id="email-in"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="Password"
                    id="password-in"
                    placeholder="Password"
                />
                <a href="#" className="password-reminder">
                    Forgot your password?
                </a>
                <button type="submit">Sign in</button>
            </form>
        </section>
    );
}

export default SignInComponent;
