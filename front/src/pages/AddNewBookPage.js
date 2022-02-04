import React from 'react';
import styles from './AddNewBookPage.module.css';
import logo from '../components/Layout/logo/logo.png';
import { StyledEngineProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MainNavigation from '../components/Layout/MainNavigation';
import AddNewBookForm from '../components/AddNewBook/AddNewBookForm';

const AddNewBook = () => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <MainNavigation />
        <Typography component="h1" className={styles.mainTitle}>
          ADD A NEW BOOK
        </Typography>
        <div className={styles.mainSection}>
          <img alt="logo of the app" src={logo} className={styles.logo} />
          <AddNewBookForm />
        </div>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default AddNewBook;
