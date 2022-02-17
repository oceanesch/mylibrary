import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../SignUp/SignUpForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

import PasswordInput from '../Shared/PasswordInput';
import EmailInput from '../Shared/EmailInput';
import AuthContext from '../../store/auth-context';

const LogInForm = () => {
  const navigationHistory = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const setAutoLogout = (miliseconds) => {
    setTimeout(() => {
      authCtx.logOut();
    }, miliseconds);
  };

  const LogInSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Authentication failed.');
      } else {
        const responseData = await response.json();

        localStorage.setItem('token', responseData.token);
        localStorage.setItem('userId', responseData.userId);

        authCtx.logIn(localStorage.getItem('token'));

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );

        localStorage.setItem('expiryDate', expiryDate.toISOString());
        setAutoLogout(remainingMilliseconds);

        navigationHistory('/myshelf');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={LogInSubmitHandler} className={styles.signUpForm}>
        <EmailInput emailInputRef={emailInputRef} />
        <PasswordInput passwordInputRef={passwordInputRef} />
        <Button
          variant="outlined"
          margin="normal"
          type="submit"
          className={styles.button}
        >
          Login
        </Button>
      </form>
    </StyledEngineProvider>
  );
};

export default LogInForm;
