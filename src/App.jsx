import HomePage from './components/pages/HomePage'
import NovelPage from './components/pages/NovelPage'
import './styles/main.scss'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  
  if (page === 'home') {
    return <HomePage setPage={setPage} />;
  }

  if (page === 'novel') {
    return <NovelPage setPage={setPage} />;
  }

}

export default App
