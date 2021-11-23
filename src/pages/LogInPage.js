import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';
import LogInForm from '../components/LogIn/LogInForm'

const SignUp = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <div>
                <h1>Login page</h1>
                <LogInForm />
            </div>
        </React.Fragment>
    );
};

export default SignUp;