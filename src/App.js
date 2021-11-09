import { Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import MyShelf from '../src/pages/MyShelf';
import AddNewBook from './pages/AddNewBook';
import SignUp from './pages/SignUp';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/myshelf" element={<MyShelf />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/addnewbook" element={<AddNewBook />} />
            </Routes>
        </div>
    );
}

export default App;
