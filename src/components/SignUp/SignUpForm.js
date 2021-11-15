import { useState } from 'react';
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Button,
    Box,
    TextField,
    Grid,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const SignUpForm = () => {
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const clickShowPasswordHandler = () => {
        setShowPassword(!showPassword);
    };

    const mouseDownPasswordHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ xs:4 }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="space-around"
            >
                <Grid item>
                    <TextField
                        id="first-name-input"
                        variant="outlined"
                        label="First Name"
                        required
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="last-name-input"
                        variant="outlined"
                        label="Last Name"
                        required
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="email-address-input"
                        variant="outlined"
                        label="E-Mail Address"
                        required
                        type="email"
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" margin="normal">
                        <InputLabel htmlFor="password-input">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="password-input"
                            type={showPassword ? 'text' : 'password'}
                            value={passwordInput}
                            onChange={changeHandler}
                            label="password"
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        onClick={clickShowPasswordHandler}
                                        onMouseDown={mouseDownPasswordHandler}
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        ></OutlinedInput>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button variant="outlined" margin="normal">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUpForm;
