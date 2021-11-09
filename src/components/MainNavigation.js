import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const MainNavigation = () => {
    return (
        <AppBar position="static">
            <ToolBar>
                <Button color="inherit">Login</Button>
            </ToolBar>
        </AppBar>
    );
};

export default MainNavigation;
