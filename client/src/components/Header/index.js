import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-no-bg.png";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const Header = (event) => {
  const logout = (event) => {
    Auth.logout();
  };

// pull in logged in user's user name
const { loading, data } = useQuery(QUERY_ME);
const user = data?.me.userName || '(No User Name Found)';

  return (
    <header>
      <ul className="navbar-cont">
        <li>
          <Link to="/" className="navbar">
            Home
          </Link>
        </li>
        {Auth.loggedIn() ? (
          <>
             <li>
                <Link to="/profile" className="navbar">
             {user}'s Profile
            </Link>
            </li>
            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="navbar">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="navbar">
                Create Account
              </Link>
            </li>
          </>
        )}

        <img className="logo" src={logo} alt="logo" />
      </ul>
    </header>
  );
};


export default Header;
