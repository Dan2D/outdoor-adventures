import React, {useState} from 'react';
import Wave from 'react-wavify';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';

import "./Nav.scss";

function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setToggleMenu(!toggleMenu);
        console.log(e.currentTarget.parentElement)
        e.currentTarget.click();
    }

    return (
        <div className='nav-container'>
            <Link to="/">
                <SVG className='nav__site-logo' src={require("../../Images/site-logo.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />
            </Link>
            <button className='nav__hamburger-btn' onClick={() => setToggleMenu(!toggleMenu)}>
                <SVG className='nav__hamburger-svg' src={require("../../Images/hamburger-icon.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />
            </button>
            <div className={`nav-menu ${toggleMenu ? "nav-menu--active" : ""}`}>
            <Wave className='wave-bg' 
            fill='#366f99'
            paused={false}
            options={{
                height: 20,
                amplitude: 40,
                speed: 0.15,
                points: 3
                }}
            />
                <Link className='nav-lnk' to="/" onClick={() => setToggleMenu(!toggleMenu)}>HOME</Link>
                <Link className='nav-lnk' to="/rentals" onClick={() => setToggleMenu(!toggleMenu)}>RENTALS</Link>
                <Link className='nav-lnk' to="/tours" onClick={() => setToggleMenu(!toggleMenu)}>TOURS</Link>
                <Link className='nav-lnk' to="/about" onClick={() => setToggleMenu(!toggleMenu)}>ABOUT</Link>
                <Link className='nav-lnk' to="/contact" onClick={() => setToggleMenu(!toggleMenu)}>CONTACT</Link>
            </div>
        </div>
    )
}

export default Nav
