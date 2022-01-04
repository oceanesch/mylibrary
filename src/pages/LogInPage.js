import React from 'react';

import styles from './SignUpPage.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

import MainNavigation from '../components/Layout/MainNavigation';
import LogInForm from '../components/LogIn/LogInForm';

const SignUp = () => {
    return (
        <React.Fragment>
            <StyledEngineProvider injectFirst>
                <MainNavigation />
                <div>
                    <Typography component="h1" className={styles.mainTitle}>
                        Log in
                    </Typography>
                    <LogInForm />
                </div>
            </StyledEngineProvider>
        </React.Fragment>
    );
};

export default SignUp;
