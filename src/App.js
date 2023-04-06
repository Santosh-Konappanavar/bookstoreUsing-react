import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/head';
import Book from './Routes/book';
import Checkstatus from './Routes/catagery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="categories" element={<Checkstatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
