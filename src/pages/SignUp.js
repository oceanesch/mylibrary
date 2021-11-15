import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';
import SignUpForm from '../components/SignUp/SignUpForm';

const SignUp = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <div>
                <h1>Sign up page</h1>
                <SignUpForm />
            </div>
        </React.Fragment>
    );
};

export default SignUp;
