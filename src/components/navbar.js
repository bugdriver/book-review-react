import React from 'react';
import LoginWithGithub from './login';

const NavBar = (props) => {
  const { loginDetails } = props;

  if (loginDetails.isLogin) {
    const { user } = loginDetails;
    return (
      <div className="navbar">
        <button className="btnlink" onClick={props.handleLogout}>
          Logout
        </button>
        <span>{user.login}</span>
      </div>
    );
  }
  return (
    <div className="navbar">
      <LoginWithGithub />
    </div>
  );
};

export default NavBar;
