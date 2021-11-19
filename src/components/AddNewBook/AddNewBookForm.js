import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

const AddNewBookForm = () => {
    return (
        <React.Fragment>
            <form>
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
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="author-input"
                            variant="outlined"
                            label="Author"
                            required
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="image-input"
                            variant="outlined"
                            label="URL of the cover"
                            required
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default AddNewBookForm;
