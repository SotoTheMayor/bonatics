import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Footer = () => {
    const logout = (event) => {
        event.prevenDefault();
        Auth.logout();
    };
    return (
        <footer>
            {/* <div>
                <div>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/myProfile'>
                                <h3>{Auth.getProfile().data.username}'s Profile</h3>
                            </Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                        <Link to='login'><h3>Login</h3></Link>
                        <Link to='signup'><h3>Create Account</h3></Link>
                        </>
                    )}
                </div>
            </div> */}
            footer goes here
        </footer>
    )
};

export default Footer;