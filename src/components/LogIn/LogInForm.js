import { useState } from 'react';
import {
    Box,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    IconButton,
    InputAdornment,
    Button
} from '@mui/material';

import { VisibilityOff, Visibility } from '@mui/icons-material';

const LogInForm = () => {
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

export default LogInForm;
