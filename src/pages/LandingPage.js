import Button from '@mui/material/Button';
import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';
import Card from '../components/UI/Card';
import Grid from '@mui/material/Grid';
import classes from './LandingPage.module.css';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <h1 className={classes.mainTitle}>Welcome to MyLibrary</h1>
            <Grid container alignItems="center" justifyContent="space-around">
                <Grid item xs={5}>
                    <Card>
                        <p className={classes.p}>
                            MyLibrary is an app that helps you track your books.
                            You can add the books you read and from there, add
                            your favorite quotes or thoughts or even sort them
                            by tags. MyLibrary will gather reading stats that
                            will help you with your future reading.
                        </p>

                        <h2 className={classes.h2}>
                            Start now by signing up !{' '}
                        </h2>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <Stack
                            justifyContent="space-evenly"
                            alignItems="center"
                            spacing={2}
                            textAlign="center"
                        >
                            <h1 className={classes.h1}>
                                JOIN MYLIBRARY AND START TRACKING YOUR READING
                                NOW
                            </h1>
                            <img
                                src="https://media.istockphoto.com/photos/stack-of-books-on-living-coral-background-picture-id1151417884?b=1&k=20&m=1151417884&s=170667a&w=0&h=A2Roz8X3rEyoV45LeWbybx9i0TtRqdch2qlgJKZHGlU="
                                alt="stack of books"
                                height="300px"
                            />
                            <Button component={RouterLink} to="/signup">
                                SIGN UP
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default LandingPage;
