import { useContext } from "react";
import { LoginFormContext } from "../../contexts/LoginForm.context";

function GreetComponent() {
    const { formSignIn, setFormSignIn } = useContext(LoginFormContext);

    return (
        <div
            className={`greet ${formSignIn ? "" : "move-greet"}`}
            id="greet"
        >
            <section
                className={`greet-in ${formSignIn ? "" : "move-text"}`}
                id="greet-in"
            >
                <h1>Welcome Back!</h1>
                <p>
                    To keep connected with us please login with your personal
                    info
                </p>
                <button onClick={() => setFormSignIn(!formSignIn)}>
                    Sign in
                </button>
            </section>
            <section
                className={`greet-up ${formSignIn ? "" : "move-text"}`}
                id="greet-up"
            >
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button onClick={() => setFormSignIn(!formSignIn)}>
                    Sign up
                </button>
            </section>
        </div>
    );
}

export default GreetComponent;
