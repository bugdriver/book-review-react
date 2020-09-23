import React from 'react';
import { Link } from 'react-router-dom';
import LoginWithGithub from './login';

const NavBar = (props) => {
  const { loginDetails } = props;

  if (loginDetails.isLogin) {
    const { user } = loginDetails;
    return (
      <div className="navbar">
        <div>
          <Link to="/">
            <h3>Reader's Junction</h3>
          </Link>
        </div>
        <div>
          <button className="btnlink" onClick={props.handleLogout}>
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
