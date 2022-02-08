import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import PasswordInput from '../Shared/PasswordInput';
import EmailInput from '../Shared/EmailInput';

const SignUpForm = () => {
  const navigationHistory = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signUpSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //TODO: add validation after here

    fetch('http://localhost:8080/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error('Creating a new user failed.');
        }
        return response.json();
      })
      .then(() => {
        navigationHistory('/login');
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={signUpSubmitHandler} className={styles.signUpForm}>
        <EmailInput emailInputRef={emailInputRef} />
        <PasswordInput passwordInputRef={passwordInputRef} />
        <Button
          variant="outlined"
          margin="normal"
          type="submit"
          className={styles.button}
        >
          Sign Up
        </Button>
      </form>
    </StyledEngineProvider>
  );
};

export default SignUpForm;
