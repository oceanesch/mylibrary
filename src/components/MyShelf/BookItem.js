import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import classes from './BookItem.module.css';

const BookItem = (props) => {
    return (
        <React.Fragment>
            <Card
                variant="elevation"
                elevation={3}
                className={classes.bookCard}
            >
                <CardMedia
                    component="img"
                    image={props.image}
                    sx={{ width: 170, height: 255 }}
                    alt={`Cover of ${props.title}`}
                />
                <CardContent className={classes.bookCardContent}>
                    <Typography
                        component="h5"
                        variant="h5"
                        className={classes.bookCardTitle}
                    >
                        {props.title}
                    </Typography>
                    <Typography component="h6" variant="overline">
                        {props.author}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default BookItem;
