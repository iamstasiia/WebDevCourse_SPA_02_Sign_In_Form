import { useContext } from "react";
import { LoginFormContext } from "../../contexts/LoginForm.context";
import NetworksComponent from "./Networks.comp";

function SignUpComponent() {
    const { formSignIn } = useContext(LoginFormContext);

    return (
        <section
            className={`sign-up ${formSignIn ? "" : "move-sign"}`}
            id="sign-up"
        >
            <h1>Create Account</h1>
            <NetworksComponent />
            <p>or use your email for registration</p>
            <form action="#">
                <input type="text" name="Name" id="name" placeholder="Name" />
                <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="Password"
                    id="password"
                    placeholder="Password"
                />
                <button type="submit">Sign up</button>
            </form>
        </section>
    );
}

export default SignUpComponent;
