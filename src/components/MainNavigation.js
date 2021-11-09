import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

const MainNavigation = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <ToolBar>
                    <Button color="inherit">Login</Button>
                </ToolBar>
            </AppBar>
        </ThemeProvider>
    );
};

export default MainNavigation;
