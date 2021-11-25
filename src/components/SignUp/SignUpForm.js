import { useRef } from 'react';
import { Button, Box, Grid } from '@mui/material';

import PasswordInput from '../Shared/PasswordInput';
import FirstNameInput from '../Shared/FirstNameInput';
import LastNameInput from '../Shared/LastNameInput';
import EmailInput from '../Shared/EmailInput';

const SignUpForm = () => {
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const signUpSubmitHandler = (event) => {
        event.preventDefault();

        const firstNameInput = firstNameInputRef.current.value;
        const lastNameInput = lastNameInputRef.current.value;
        const emailInput = emailInputRef.current.value;
        const passwordInput = passwordInputRef.current.value;

        console.log(firstNameInput, lastNameInput, emailInput, passwordInput);
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
                    <Grid item>
                        <FirstNameInput firstNameInputRef={firstNameInputRef} />
                    </Grid>
                    <Grid item>
                        <LastNameInput lastNameInputRef={lastNameInputRef} />
                    </Grid>
                    <Grid item>
                        <EmailInput emailInputRef={emailInputRef} />
                    </Grid>
                    <Grid item>
                        <PasswordInput passwordInputRef={passwordInputRef} />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            margin="normal"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
        </Box>
    );
};

export default SignUpForm;
