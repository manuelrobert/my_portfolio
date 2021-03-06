import React from 'react'
// import { Navbar, Container, Nav } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'

import './Header.css';

// const onMouseEnter = (event, color) => {
//     const el = event.target;
//     el.style.backgroundColor = color;
// };

// const onMouseOut = (event) => {
//     const el = event.target;
//     el.style.backgroundColor = "transparent";
// };

function Header(props) {
    return (
        <header className='header'>
            <span className='title'>Manuel Robert</span>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label htmlFor='menu-btn' className='menu-icon'>
                <span className="navicon"></span>
            </label>
            <ul className='menu'>
                <li>
                    Home
                </li>
                <li>
                    Education
                </li>
                <li>
                    Experience
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Open Source
                </li>
                <li>
                    Contact Me
                </li>
            </ul>
        </header>
    )
}

export default Header