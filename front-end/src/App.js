import React, {useEffect, useState}  from "react";
import { Redirect, Route, Switch } from 'react-router-dom';


/// FILE IMPORTS ///
import NavBar from './components/NavBar.js';
import Books from './components/Books.js';
//import Book from './components/Book.js';
//import Checkout from './components/Checkout.js';
//import Return from './components/Return.js';


function App() {
  const [books, setBooks] = useState([]);
   
  useEffect(() => {
    async function fetchBooks() {
        const result = await fetch('http://localhost:3001/api/books');
        const json = await result.json();
        setBooks(json);
      }
      fetchBooks();
  }, []);

  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/books">
          <Books books={books}/>
        </Route>
        <Redirect to='/books'/>
      </Switch>
    </div>
  );
}

export default App;




