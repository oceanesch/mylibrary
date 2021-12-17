import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddNewBookForm.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { addNewBook } from '../../libs/api';

const AddNewBookForm = () => {
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const coverInputRef = useRef();

    const navigationHistory = useNavigate();

    const addNewBookSubmitHandler = (event) => {
        event.preventDefault();

        const newBook = {
            id: Math.random(),
            title: titleInputRef.current.value,
            author: authorInputRef.current.value,
            image: coverInputRef.current.value,
        };

        console.log(newBook);

        addNewBook(newBook);

        navigationHistory('/myshelf');
    };

    return (
        <React.Fragment>
            <StyledEngineProvider>
                <form onSubmit={addNewBookSubmitHandler}>
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
                    <Button
                        variant="outlined"
                        type="submit"
                        className={styles.button}
                    >
                        Submit
                    </Button>
                </form>
            </StyledEngineProvider>
        </React.Fragment>
    );
};

export default AddNewBookForm;
