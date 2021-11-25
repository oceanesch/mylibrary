import { useRef } from 'react';
import { Button, Box, Grid } from '@mui/material';

import PasswordInput from '../Shared/PasswordInput';
// import FirstNameInput from '../Shared/FirstNameInput';
// import LastNameInput from '../Shared/LastNameInput';
import EmailInput from '../Shared/EmailInput';

const SignUpForm = () => {
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
        )
        // .then((responsePayLoad) => {
        //     if(responsePayLoad.ok) {
        //         //do something w/ the success response 
        //     } else{
        //         //do something if you get an error
        //     }
        // })

        console.log(
            // enteredFirstName,
            // enteredLastName,
            enteredEmail,
            enteredPassword
        );
    };

    return (
        <Box sx={{ xs: 4 }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-around"
                component="form"
                onSubmit={signUpSubmitHandler}
            >
                {/* <Grid item>
                    <FirstNameInput firstNameInputRef={firstNameInputRef} />
                </Grid>
                <Grid item>
                    <LastNameInput lastNameInputRef={lastNameInputRef} />
                </Grid> */}
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

export default SignUpForm;
