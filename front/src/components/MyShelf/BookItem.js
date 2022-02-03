import React from 'react';
import styles from './BookItem.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';

const BookItem = (props) => {
  const deleteButtonHandler = (event) => {
    event.preventDefault();
    const deletedBookID = props.id;
    // console.log(deletedBookID);
    props.onSaveDeletedBookId(deletedBookID);
  };

  const editButtonHandler = (event) => {
    event.preventDefault();
    const editedBookId = props.id;
    props.onEditBook(editedBookId);
  };

  return (
    <React.Fragment>
      <Card variant="elevation" elevation={3} className={styles.bookCard}>
        <CardMedia
          component="img"
          image={props.image}
          alt={`Cover of ${props.title}`}
          className={styles.bookCardImage}
        />
        <CardContent className={styles.bookCardContent}>
          <Typography component="h5" className={styles.bookCardTitle}>
            {props.title}
          </Typography>
          <Typography variant="overline">{props.author}</Typography>
        </CardContent>
        <CardActions className={styles.bookCardActions}>
          <IconButton aria-label="modify book" onClick={editButtonHandler}>
            <Edit />
          </IconButton>
          <IconButton aria-label="delete book" onClick={deleteButtonHandler}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default BookItem;
