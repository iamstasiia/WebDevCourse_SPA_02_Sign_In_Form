import { createContext, useState } from "react";

export const LoginFormContext = createContext();

export const LoginFormContextProvider = ({ children }) => {
    const [formSignIn, setFormSignIn] = useState(true);
    const value = { formSignIn, setFormSignIn };

    return (
        <LoginFormContext.Provider value={value}>
            {children}
        </LoginFormContext.Provider>
    );
};
