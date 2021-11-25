import { useRef } from 'react';
import { Box, Grid, Button } from '@mui/material';

import PasswordInput from '../Shared/PasswordInput';
import EmailInput from '../Shared/EmailInput';

const LogInForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const LogInSubmitHandler = (event) => {
        event.preventDefault();

        const emailInput = emailInputRef.current.value;
        const passwordInput = passwordInputRef.current.value;

        console.log(emailInput, passwordInput);

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
