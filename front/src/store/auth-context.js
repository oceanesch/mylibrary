import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);


  useEffect(()=> {
    const storedToken = localStorage.getItem('token')
    if(storedToken) {
      setToken(storedToken)
    }
  },[])

  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);

  const logInHandler = (token) => {
    setToken(token);
  };

  const logOutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logIn: logInHandler,
    logOut: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
