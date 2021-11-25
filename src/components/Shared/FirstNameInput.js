import { TextField } from '@mui/material';

const FirstNameInput = (props) => {
    return (
        <TextField
            id="first-name-input"
            variant="outlined"
            label="First Name"
            required
            margin="normal"
            fullWidth
            inputRef={props.firstNameInputRef}
        />
    );
};

export default FirstNameInput;
