import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import classes from './BookItem.module.css'

const DUMMY_BOOKS = {
    id: 'book1',
    title: 'Aristotle and Dante discover the Secrets of the Universe',
    author: 'Benjamin Alire Saenz',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81w9ZlovACL.jpg',
};
const BookItem = () => {
    return (
        <React.Fragment>
            <Card
                variant="elevation"
                elevation={3}
                classes={classes.bookCard}
            >
                <CardMedia
                    component="img"
                    image={DUMMY_BOOKS.image}
                    sx={{ width: 170, height: 255 }}
                    alt={`Cover of ${DUMMY_BOOKS.title}`}
                />
                <CardContent>
                    <Typography component="h5" variant="h5">
                        {DUMMY_BOOKS.title}
                    </Typography>
                    <Typography component="h6" variant="overline">
                        {DUMMY_BOOKS.author}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default BookItem;
