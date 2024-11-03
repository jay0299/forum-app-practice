import './App.css';
import { Button } from './components/Button';
import { Table } from './components/Table';
import { NewPost } from './components/NewPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Forum!</h1>
      <Table />
      <Button text="글쓰기" />
      <NewPost />
    </div>
  );
}

export default App;
