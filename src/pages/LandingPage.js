import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './LandingPage.module.css';

import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Card from '../components/UI/Card';
import MainNavigation from '../components/Layout/MainNavigation';

const LandingPage = () => {
    return (
        <React.Fragment>
            <StyledEngineProvider injectFirst>
                <MainNavigation />
                <Typography component="h1" className={styles.mainTitle}>
                    Welcome to MyLibrary
                </Typography>
                <Grid
                    container
                    direction="column"
                    className={styles.mainBody}
                    // alignItems="center"
                    // justifyContent="space-around"
                >
                    <Grid item xs={1} md={4}>
                        <Box className={styles.card}>
                            MyLibrary is an app that helps you track your books.
                            You can add the books you read and from there, add
                            your favorite quotes or thoughts or even sort them
                            by tags. MyLibrary will gather reading stats that
                            will help you with your future reading.
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={4}>
                        <Box className={styles.card}>
                            <Stack
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={2}
                                textAlign="center"
                            >
                                <Typography
                                    component="h2"
                                    className={styles.cardTitle}
                                >
                                    JOIN MYLIBRARY AND START TRACKING YOUR
                                    READING NOW
                                </Typography>
                                <img
                                    src="https://media.istockphoto.com/photos/stack-of-books-on-living-coral-background-picture-id1151417884?b=1&k=20&m=1151417884&s=170667a&w=0&h=A2Roz8X3rEyoV45LeWbybx9i0TtRqdch2qlgJKZHGlU="
                                    alt="stack of books"
                                    height="300px"
                                />
                                <Button component={RouterLink} to="/signup">
                                    SIGN UP
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </StyledEngineProvider>
        </React.Fragment>
    );
};

export default LandingPage;
