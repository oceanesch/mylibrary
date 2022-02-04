import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import BookItem from './BookItem';

// const DUMMY_BOOKS = [
//     {
//         id: 'book1',
//         title: 'Aristotle and Dante discover the Secrets of the Universe',
//         author: 'Benjamin Alire Saenz',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/81w9ZlovACL.jpg',
//     },
//     {
//         id: 'book2',
//         title: 'Before the Coffee gets Cold',
//         author: 'Toshikazu Kawaguchi',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/81P4+L4dGfL.jpg',
//     },
//     {
//         id: 'book3',
//         title: 'Everyone is a Aliebn When Ur a Aliebn Too',
//         author: 'Jomny Sun',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/519SE+JwJ3L.jpg',
//     },
//     {
//         id: 'book4',
//         title: 'Dune',
//         author: 'Frank Herbert',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/81fuj9MOHfL.jpg',
//     },
//     {
//         id: 'book5',
//         title: 'Sapiens: A Brief History of Humankind',
//         author: 'Yuval Noah Harari',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/71Sx9g3a-xL.jpg',
//     },
//     {
//         id: 'book6',
//         title: 'The House in the Cerulean Sea',
//         author: 'T.J. Klune',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/81MnY8Q7OLL.jpg',
//     },
//     {
//         id: 'book7',
//         title: 'The song of Achilles',
//         author: 'Madeline Miller',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/91k4PrTuiSL.jpg',
//     },
//     {
//         id: 'book8',
//         title: 'This Is How You Lose the Time War',
//         author: 'Amal El-Mohtar',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/71u+V+fclqL.jpg',
//     },
//     {
//         id: 'book9',
//         title: 'Raybearer',
//         author: 'Jordan Ifueko',
//         image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567330635l/50158128._SX0_SY0_.jpg',
//     },
//     {
//         id: 'book10',
//         title: 'The Dark Between Stars',
//         author: 'Atticus Poetry',
//         image: 'https://images-na.ssl-images-amazon.com/images/I/91b2W5Xh49L.jpg',
//     },
// ];

const BookList = () => {
  const [books, setBooks] = useState([]);

  const navigationHistory = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch books.');
        }
        return response.json();
      })
      .then((responseData) => {
        setBooks(responseData.books);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteBookHandler = (deletedBookID) => {
    fetch('http://localhost:8080/book/' + deletedBookID, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Deleting book failed');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);

        const updatedBooks = books.filter((book) => book._id !== deletedBookID);
        setBooks(updatedBooks);

        //TO DO: try again with just prevState.filter
        // setBooks((prevState) => {
        //   const updatedBooks = prevState.filter((book) => {
        //     return book._id !== deletedBookID;
        //   });
        //   return { books: updatedBooks };
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editBookHandler = (editedBookId) => {
    navigationHistory('/editbook');
  };

  return (
    <Grid
      container
      direction={{ xs: 'column', sm: 'row' }}
      spacing={1}
      justifyContent="space-evenly"
    >
      {books.map((book) => {
        return (
          <Grid item key={book._id}>
            <BookItem
              id={book._id}
              title={book.title}
              author={book.author}
              image={book.image}
              onSaveDeletedBookId={deleteBookHandler}
              onEditBook={editBookHandler}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BookList;
