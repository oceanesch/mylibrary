import { useRef } from 'react';
import {
    Box,
    TextField,
    Grid,
    Button,
} from '@mui/material';

import PasswordInput from '../Shared/PasswordInput';

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
        <form onSubmit={LogInSubmitHandler}>
            <Box sx={{ xs: 4 }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                >
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
            </Box>
        </form>
    );
};

export default LogInForm;
