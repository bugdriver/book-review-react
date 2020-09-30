import React, { useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoginWithGithub from './login';
import UserContext from '../context/userContext';
import requestAPI from '../api/requestAPI';

const NavBar = (props) => {
  const [loginDetails, setLoginDetails] = useContext(UserContext);

  useEffect(() => {
    requestAPI
      .getUser()
      .then((userDetails) => {
        if (userDetails) {
          setLoginDetails({ isLogin: true, user: userDetails });
        }
      })
      .catch((err) => {
        setLoginDetails({ isLogin: false, user: null });
      });
  }, [setLoginDetails]);

  const handleLogout = function() {
    requestAPI.logout().then(() => {
      setLoginDetails({ isLogin: false, user: null });
    });
  };

  if (loginDetails.isLogin) {
    const { user } = loginDetails;
    return (
      <div className="navbar">
        <div className="navbar-right">
          <Link to="/">
            <h3>Reader's Junction</h3>
          </Link>
          <NavLink to="/addBook" activeClassName="selectedLink">
            <p>Add Book</p>
          </NavLink>
        </div>
        <div>
          <button className="btnlink" onClick={handleLogout}>
            Logout
          </button>
          <span>{user.login}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h3>Reader's Junction</h3>
        </Link>
      </div>
      <div>
        <LoginWithGithub />
      </div>
    </div>
  );
};

export default NavBar;
