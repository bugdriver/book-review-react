import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './navbar';
import './style.css';
import BookDetail from './bookDetail';
import Home from './home';
import AddBook from './addBook';

const Main = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book/:bookId">
          <BookDetail />
        </Route>
        <Route path="/addBook">
          <AddBook />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
