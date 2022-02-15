import styles from './Input.module.css';

import { TextField } from '@mui/material';

const EmailInput = (props) => {
  return (
    <TextField
      error={props.error || false}
      id="email-address-input"
      variant="outlined"
      label="E-Mail Address"
      required
      type="email"
      name="email"
      margin="normal"
      inputRef={props.emailInputRef}
      className={styles.formInput}
    />
  );
};

export default EmailInput;
