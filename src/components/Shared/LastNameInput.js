import { TextField } from '@mui/material';

const LastNameInput = (props) => {
    return (
        <TextField
            id="last-name-input"
            variant="outlined"
            label="Last Name"
            required
            margin="normal"
            inputRef={props.lastNameInputRef}
        />
    );
};

export default LastNameInput;
