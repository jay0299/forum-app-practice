import './App.css';
import { Table } from './components/Table';
import { NewPost } from './components/NewPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/posts" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
