import SignInComponent from "./components/login-form/Sign-in.comp";
import SignUpComponent from "./components/login-form/Sign-up.comp";
import "./App.scss";
import "./components/login-form/Login.components.scss";
import GreetComponent from "./components/login-form/Greet.comp";
import { LoginFormContextProvider } from "./contexts/LoginForm.context";
import Footer from "./components/Footer.component";

function App() {
    return (
        <>
            <LoginFormContextProvider>
                <div className="form-container">
                    <GreetComponent />

                    <div className="entry">
                        <SignInComponent />
                        <SignUpComponent />
                    </div>
                </div>
                
            </LoginFormContextProvider>

            <Footer />
        </>
    );
}

export default App;
