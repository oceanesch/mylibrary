import { useContext, useRef } from 'react';
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

    const LogInSubmitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        console.log(enteredEmail, enteredPassword);

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDe2VlLrzxhf8f_PW46fjEuMfYRy6yDvSY',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then((response) => {
                if (response.ok) {
                    navigationHistory('/myshelf');
                    return response.json();
                } else {
                    return response.json().then((responseData) => {
                        let errorMessage = 'Authentication failed';
                        if (
                            responseData &&
                            responseData.error &&
                            responseData.error.message
                        ) {
                            errorMessage = responseData.error.message;
                        }
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((responseData) => {
                console.log(responseData);
                authCtx.logIn(responseData.idToken);
            })
            .catch((err) => {
                alert(err.message);
            });

        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
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
                    Sign Up
                </Button>
            </form>
        </StyledEngineProvider>
    );
};

export default LogInForm;
