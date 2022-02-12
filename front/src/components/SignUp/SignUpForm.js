import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import PasswordInput from '../Shared/PasswordInput';
import EmailInput from '../Shared/EmailInput';

const SignUpForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Creating a new user failed.'
  );

  const navigationHistory = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signUpSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //TODO: add validation after here

    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200 && response.status !== 201) {
      setError(true);
      const responseData = await response.json();
      console.log(responseData);
      setErrorMessage(responseData.data[0].msg);
      throw new Error(errorMessage);
    }

    navigationHistory('/login');
  };

  return (
    <StyledEngineProvider injectFirst>
      {error && <p>{errorMessage}</p>}
      <form onSubmit={signUpSubmitHandler} className={styles.signUpForm}>
        <EmailInput error={error} emailInputRef={emailInputRef} />
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
