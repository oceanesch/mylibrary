import { TextField } from '@mui/material';

const EmailInput = (props) => {
    return (
        <TextField
            id="email-address-input"
            variant="outlined"
            label="E-Mail Address"
            required
            type="email"
            margin="normal"
            inputRef={props.emailInputRef}
        />
    );
};

export default EmailInput;
