import React, {useEffect, useState}  from "react";
//import { Route, Switch } from 'react-router-dom';


/// FILE IMPORTS ///
import NavBar from '../components/NavBar.js';
//import Books from './components/Books.js';
//import Book from './components/Book.js';
//import Checkout from './components/Checkout.js';
//import Return from './components/Return.js';


function App() {
   console.log('hello World')
    return (
        <div>
           <header className="App-header">
              <NavBar />
           </header>
           <Switch>
             <Route exact path="/api/books">
                 <Books/>
             </Route>
             <Route path="/api/books/:bookId">
                 <Book />
             </Route>
             <Route path="/api/books/:bookId/checkout/:userId">
                 <Checkout />
             </Route>
             <Route path="/api/books/:bookId/return">
                 <Return />
             </Route>
           </Switch>
        </div>
    );
}

export default App;