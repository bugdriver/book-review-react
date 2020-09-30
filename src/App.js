import React, { useState } from 'react';
import Main from './components/main';
import UserContext from './context/userContext';

function App() {
  const [loginDetails, setLoginDetails] = useState({
    isLogin: false,
    user: null
  });
  return (
    <UserContext.Provider value={[loginDetails, setLoginDetails]}>
      <Main />
    </UserContext.Provider>
  );
}

export default App;
