import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';

const SignUpForm = () => {
    return (
        <Box>
            <TextField
                id="first-name-input"
                variant="outlined"
                label="First Name"
                required
            />
            <TextField
                id="last-name-input"
                variant="outlined"
                label="Last Name"
                required
            />
            <TextField
                id="email-address-input"
                variant="outlined"
                label="E-Mail Address"
                required
                type="email"
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <OutlinedInput
                    id="password-input"
                    required
                    type="password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                {<Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                ></OutlinedInput>
            </FormControl>
        </Box>
    );
};

/*
const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
*/

export default SignUpForm;
