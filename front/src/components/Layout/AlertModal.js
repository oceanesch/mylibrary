import { useState } from 'react';
import classes from './AlertModal.module.css';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AlertModal = (props) => {
    const closeModalHandler = () => {
        props.setIsOpen(false);
    };

    return (
        <Modal open={props.isOpen} onClose={closeModalHandler}>
            <Box className={classes.alertModal}>
                <Typography>{props.modalTitle}</Typography>
                <Typography>{props.modalMessage}</Typography>
            </Box>
        </Modal>
    );
};

export default AlertModal;
