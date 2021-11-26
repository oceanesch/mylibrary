import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Button } from '@mui/material';

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
        <Box sx={{ xs: 4 }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-around"
                component="form"
                onSubmit={LogInSubmitHandler}
            >
                <Grid item>
                    <EmailInput emailInputRef={emailInputRef} />
                </Grid>
                <Grid item>
                    <PasswordInput passwordInputRef={passwordInputRef} />
                </Grid>
                <Grid item>
                    <Button variant="outlined" margin="normal" type="submit">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LogInForm;
