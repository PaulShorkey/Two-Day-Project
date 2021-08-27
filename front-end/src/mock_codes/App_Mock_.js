import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}  from "react";
import Data from './Data.jsx';
import NavBar from '../components/NavBar.js';

function App() {
  const [books, setBooks] = useState([])
  console.log('IN THE APP')

  useEffect(async () => {
      const result = await fetch('http://localhost:3001/api/books');
      const data = await result.json();
      setBooks(data);
    }, [setBooks]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Data from Postgres</h2>
        <table>
          <tr>
            <th>Book Id</th>
            <th>Book Name</th>
            <th>Author</th>
          </tr>
          <Data books={books}/>
        </table>
      </header>
    </div>
  );
}

export default App;
