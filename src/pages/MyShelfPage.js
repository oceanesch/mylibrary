import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './MyShelfPage.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import BookList from '../components/MyShelf/BooksList';
import Button from '@mui/material/Button';
import MainNavigation from '../components/Layout/MainNavigation';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MyShelf = () => {
    return (
        <React.Fragment>
            <StyledEngineProvider injectFirst>
                <MainNavigation />
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography component="h1" className={styles.mainTitle}>
                            MY SHELF
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            component={RouterLink}
                            to="/addnewbook"
                            variant="contained"
                            className={styles.button}
                            size="large"
                        >
                            ADD A NEW BOOK
                        </Button>
                    </Grid>
                    <Grid item>
                        <BookList />
                    </Grid>
                </Grid>
            </StyledEngineProvider>
        </React.Fragment>
    );
};

export default MyShelf;
