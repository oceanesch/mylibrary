import { Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import MyShelf from '../src/pages/MyShelf';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/myshelf" element={<MyShelf />} />
            </Routes>
        </div>
    );
}

export default App;
