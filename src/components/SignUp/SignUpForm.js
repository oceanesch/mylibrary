import { useRef } from 'react';
import { Button, Box, TextField, Grid } from '@mui/material';
import PasswordInput from '../Shared/PasswordInput';
import FirstNameInput from '../Shared/FirstNameInput';
import LastNameInput from '../Shared/LastNameInput';

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
            <form onSubmit={signUpSubmitHandler}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Grid item>
                        <FirstNameInput firstNameInputRef={firstNameInputRef} />
                    </Grid>
                    <Grid item>
                        <LastNameInput lastNameInputRef={lastNameInputRef} />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email-address-input"
                            variant="outlined"
                            label="E-Mail Address"
                            required
                            type="email"
                            margin="normal"
                            inputRef={emailInputRef}
                        />
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
            </form>
        </Box>
    );
};

export default SignUpForm;
