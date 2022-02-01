import Box from '@mui/material/Box';

const Card = (props) => {
    return (
        <Box
            sx={{
                boxShadow: '0 2px 8px #ffecb9',
                borderRadius: '6px',
                margin: '20px',
                padding: '20px', 
            }}
        >
            {props.children}
        </Box>
    );
};


export default Card;
