import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Table } from './components/Table';
import { NewPost } from './components/NewPost';
import { Post } from './components/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/posts" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
