import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';






const Footer = () => {
    return (
        <footer>
            <div className="footer">
            
                <img src="bonatics_icon.png" alt="Bonatics Icon" width="80px" />
                
                <p>© 2023 Bonatics Inc. || All Rights Reserved.</p>
                <a href="https://github.com/SotoTheMayor/bonatics">
                    <img src="facebook_icon.png" alt="Facebook Icon" width="30px" />
                </a>
                <a href="https://github.com/SotoTheMayor/bonatics">
                    <img src="twitter_icon.png" alt="Twitter Icon" width="30px" />
                </a>
                <a href="https://github.com/SotoTheMayor/bonatics">
                    <img src="Instagram_icon.png" alt="Instagram Icon" width="30px" />
                </a>

            </div>
        </footer>
    )
};

export default Footer;