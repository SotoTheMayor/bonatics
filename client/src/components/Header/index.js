import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-no-bg.png'

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        Auth.logout();
    };
    return (
        <header>
          <ul>
            <li><Link to='/' className='navbar'>Home</Link></li>
            <li><Link to='/profile' className='navbar'>Profile</Link></li>
            {Auth.loggedIn() ? (
                        <>
                            <Link to='/myProfile' className='navbar'>
                                <li>{Auth.getProfile().data.username}'s Profile</li>
                            </Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                        <li><Link to='/login' className='navbar'>Login</Link></li>
                        <li><Link to='/signup' className='navbar'>Create Account</Link></li>
                        </>
                    )}
            
            <img className='logo' src={logo} alt='logo' />
            </ul>
        </header>
    )
};

export default Header;