import React, {useState} from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';

import "./Nav.scss";

function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='nav-container'>
            <Link to="/">
                <SVG className='nav__site-logo' src={require("../../Images/site-logo.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />
            </Link>
            <button className='nav__hamburger-btn' onClick={() => setToggleMenu(!toggleMenu)}>
                <SVG className='nav__hamburger-svg' src={require("../../Images/hamburger-icon.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />
            </button>
            <div className={`nav-menu ${toggleMenu ? "nav-menu--active" : ""}`}>
                <Link to="/">HOME</Link>
                <Link to="/rentals">RENTALS</Link>
                <Link to="/tours">TOURS</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}

export default Nav
