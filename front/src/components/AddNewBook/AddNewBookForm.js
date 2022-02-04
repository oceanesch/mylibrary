import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddNewBookForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddNewBookForm = () => {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const coverInputRef = useRef();

  const navigationHistory = useNavigate();

  const addNewBookSubmitHandler = (event) => {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;
    const image = coverInputRef.current.value;

    console.log(title, author, image);

    fetch('http://localhost:8080/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, author: author, image: image }),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error('Adding a new book failed');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });

    navigationHistory('/myshelf');
  };

  return (
    <React.Fragment>
      <StyledEngineProvider>
        <form onSubmit={addNewBookSubmitHandler} className={styles.newBookForm}>
          <TextField
            id="title-input"
            variant="outlined"
            label="Title"
            required
            inputRef={titleInputRef}
          />
          <TextField
            id="author-input"
            variant="outlined"
            label="Author"
            required
            inputRef={authorInputRef}
          />
          <TextField
            id="image-input"
            variant="outlined"
            label="URL of the cover"
            required
            inputRef={coverInputRef}
          />
          <Button variant="outlined" type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default AddNewBookForm;
