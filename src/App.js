import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar';
import requestAPI from './api/requestAPI';
import './components/style.css';
import Books from './components/Books';
import BookDetail from './components/bookDetail';

function App() {
  const [loginDetails, setLoginDetails] = useState({
    isLogin: false,
    user: null
  });

  useEffect(() => {
    requestAPI.getUser().then((userDetails) => {
      if (userDetails) {
        setLoginDetails({ isLogin: true, user: userDetails });
      }
    });
  }, [loginDetails.isLogin]);

  const handleLogout = function() {
    requestAPI.logout().then(() => {
      setLoginDetails({ isLogin: false, user: null });
    });
  };

  return (
    <BrowserRouter>
      <NavBar loginDetails={loginDetails} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <div>
            <Books />
          </div>
        </Route>
        <Route path="/book/:bookId">
          <BookDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
