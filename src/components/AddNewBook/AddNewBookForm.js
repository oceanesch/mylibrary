import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { addNewBook } from '../../libs/api';

const AddNewBookForm = () => {
    const titleInputRef = useRef();
    const authorInputRef = useRef();
    const coverInputRef = useRef();

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

        // titleInputRef.current.value = '';
        // authorInputRef.current.value = '';
        // coverInputRef.current.value = '';
    };

    return (
        <React.Fragment>
            <form onSubmit={addNewBookSubmitHandler}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Grid item>
                        <TextField
                            id="title-input"
                            variant="outlined"
                            label="Title"
                            required
                            margin="normal"
                            inputRef={titleInputRef}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="author-input"
                            variant="outlined"
                            label="Author"
                            required
                            margin="normal"
                            inputRef={authorInputRef}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="image-input"
                            variant="outlined"
                            label="URL of the cover"
                            required
                            margin="normal"
                            inputRef={coverInputRef}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default AddNewBookForm;
