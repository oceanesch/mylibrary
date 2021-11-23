import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';
import BookList from '../components/MyShelf/BooksList';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const MyShelf = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <h1>MY SHELF PAGE</h1>
            <Button component={RouterLink} to="/addnewbook" variant="contained">
                ADD A NEW BOOK
            </Button>
            <BookList />
        </React.Fragment>
    );
};

export default MyShelf;
