import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from './logo/logo.png';
import classes from './MainNavigation.module.css';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

const MainNavigation = () => {

  return (
    <AppBar position="static">
      <ToolBar className={classes.mainNav}>
        <RouterLink to="/">
          <img alt="logo of the app" src={logo} className={classes.logo} />
        </RouterLink>
        <Typography component="div" sx={{ flexGrow: 1 }} />
        <Button
          className={classes.mainNavBtn}
          variant="contained"
          disableElevation
          component={RouterLink}
          to="/login"
        >
          Login
        </Button>
        <Button
          className={classes.mainNavBtn}
          variant="contained"
          disableElevation
          component={RouterLink}
          to="/"
        >
          Log Out
        </Button>
      </ToolBar>
    </AppBar>
  );
};

export default MainNavigation;
