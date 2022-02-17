import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './logo/logo.png';
import classes from './MainNavigation.module.css';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logOut();
  };

  return (
    <AppBar position="static">
      <ToolBar className={classes.mainNav}>
        <RouterLink to="/">
          <img alt="logo of the app" src={logo} className={classes.logo} />
        </RouterLink>
        <Typography component="div" sx={{ flexGrow: 1 }} />
        {!authCtx.isLoggedIn && (
          <Button
            className={classes.mainNavBtn}
            variant="contained"
            disableElevation
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>
        )}
        {authCtx.isLoggedIn && (
          <Button
            className={classes.mainNavBtn}
            variant="contained"
            disableElevation
            component={RouterLink}
            onClick={logoutHandler}
            to="/"
          >
            Log Out
          </Button>
        )}
      </ToolBar>
    </AppBar>
  );
};

export default MainNavigation;
