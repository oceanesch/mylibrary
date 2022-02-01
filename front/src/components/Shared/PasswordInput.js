import { useState } from 'react';

import styles from './Input.module.css';

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';
const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const mouseDownPasswordHandler = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    const mouseUpPasswordHandler = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl
            variant="outlined"
            margin="normal"
            className={styles.formInput}
        >
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <OutlinedInput
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                label="password"
                required
                inputRef={props.passwordInputRef}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onMouseDown={mouseDownPasswordHandler}
                            onMouseUp={mouseUpPasswordHandler}
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
