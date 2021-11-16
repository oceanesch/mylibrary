import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';
import BookList from '../components/MyShelf/BooksList';

const MyShelf = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <h1>MY SHELF PAGE</h1>
            <BookList/>
        </React.Fragment>
    );
};

export default MyShelf;
