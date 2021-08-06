import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Manuel Robert</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
