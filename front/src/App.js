import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MyShelf from './pages/MyShelfPage';
import AddNewBook from './pages/AddNewBookPage';
import EditBook from './pages/EditBookPage';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/myshelf" element={<MyShelf />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/addnewbook" element={<AddNewBook />} />
                <Route path="/editbook" element={<EditBook />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
    );
}

export default App;
