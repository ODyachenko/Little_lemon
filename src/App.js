import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
