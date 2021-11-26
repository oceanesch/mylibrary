import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    logIn: (token) => {},
    logOut: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
        setToken(token);
    };

    const logOutHandler = () => {
        setToken(null);
    };

    return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
