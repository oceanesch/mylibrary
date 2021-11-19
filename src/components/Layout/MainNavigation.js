import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './logo/logo.png';
import classes from './MainNavigation.module.css';
import Grid from '@mui/material/Grid';

const MainNavigation = () => {
    return (
        <AppBar position="static">
            <ToolBar className={classes.mainNav}>
                <img
                    alt="logo of the app"
                    src={logo}
                    className={classes.logo}
                />
                <Button
                    className={classes.mainNavBtn}
                    variant="contained"
                    disableElevation
                >
                    Login
                </Button>
            </ToolBar>
        </AppBar>
    );
};

export default MainNavigation;
