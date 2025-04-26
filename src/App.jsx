import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {
  const [logs, setLogs] = useState([]);
  const handleAddLog = (newLog) => {
    setLogs([...logs, newLog]); // 既存＋新しいログをまとめて更新
  };

  return (
    <div>
      <Header />
      <BookForm onAdd={handleAddLog} />
      <BookList logs={logs} />
    </div>
  );
}

export default App;
