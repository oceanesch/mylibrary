import { useState } from 'react';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordInput = (props) => {
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
        <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <OutlinedInput
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={changeHandler}
                label="password"
                required
                inputRef={props.passwordInputRef}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={clickShowPasswordHandler}
                            onMouseDown={mouseDownPasswordHandler}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            ></OutlinedInput>
        </FormControl>
    );
};

export default PasswordInput;
