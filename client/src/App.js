import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Table } from './components/Table';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Forum!</h1>
      <Table />
      <Button text="글쓰기" />
    </div>
  );
}

export default App;
