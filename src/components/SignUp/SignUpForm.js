import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import PasswordInput from '../Shared/PasswordInput';
// import FirstNameInput from '../Shared/FirstNameInput';
// import LastNameInput from '../Shared/LastNameInput';
import EmailInput from '../Shared/EmailInput';

const SignUpForm = () => {
    const navigationHistory = useNavigate();

    // const firstNameInputRef = useRef();
    // const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const signUpSubmitHandler = (event) => {
        event.preventDefault();

        // const enteredFirstName = firstNameInputRef.current.value;
        // const enteredLastName = lastNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // add validation after here

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe2VlLrzxhf8f_PW46fjEuMfYRy6yDvSY',
            {
                method: 'POST',
                body: JSON.stringify({
                    // firstName: enteredFirstName,
                    // lastName: enteredLastName,
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        ).then((responsePayLoad) => {
            if (responsePayLoad.ok) {
                navigationHistory('/myshelf');
            } else {
                return responsePayLoad.json().then((responseData) => {
                    console.log(responseData);
                    if (
                        responseData &&
                        responseData.error &&
                        responseData.error.message
                    ) {
                        const errorMessage = responseData.error.message;
                        alert(errorMessage);
                    }
                });
            }
        });

        console.log(
            // enteredFirstName,
            // enteredLastName,
            enteredEmail,
            enteredPassword
        );
    };

    return (
        <StyledEngineProvider injectFirst>
            <form onSubmit={signUpSubmitHandler} className={styles.signUpForm}>
                {/* <Grid item>
                    <FirstNameInput firstNameInputRef={firstNameInputRef} />
                </Grid>
                <Grid item>
                    <LastNameInput lastNameInputRef={lastNameInputRef} />
                </Grid> */}

                <EmailInput
                    emailInputRef={emailInputRef}
                    className={styles.signUpFormInput}
                />
                <PasswordInput
                    passwordInputRef={passwordInputRef}
                    className={styles.signUpFormInput}
                />
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
