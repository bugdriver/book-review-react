import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import requestAPI from './api/requestAPI';
import './components/style.css';
import Books from './components/Books';

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
    <div>
      <NavBar loginDetails={loginDetails} handleLogout={handleLogout} />
      <Books />
    </div>
  );
}

export default App;
