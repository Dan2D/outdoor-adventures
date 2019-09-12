import React from 'react';
import {Link} from 'react-router-dom';

import SVG from 'react-inlinesvg';
import "./Footer.scss";
// Appropriate place to use bootstrap grid???
function Footer() {
    return (
        <div>
            <SVG className='footer-waves' src={require("../../Images/waves-bg.svg")} />
            <div className='footer__content'>
                <div className='footer__left'>
                    <SVG className='footer__logo' src={require("../../Images/site-logo.svg")} />
                    <div className='footer_lnks'>
                        <Link to="/">HOME</Link>
                        <Link to="/rentals">RENTALS</Link>
                        <Link to="/tours">TOURS</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </div>
                <div className='footer__right' >
                    <div className='contact-info'>
                        <div>
                            <SVG className='contact-icon' src={require("../../Images/hours-icon.svg")} />
                            <span>Thurs - Sun 8:00 AM - 8:00 PM</span>
                        </div>
                        <div>
                            <SVG className='contact-icon' src={require("../../Images/location-icon.svg")} />
                            <span>117 HillCrest Dr. Seattle, WA 98161</span>
                        </div>
                        <div>
                            <SVG className='contact-icon' src={require("../../Images/phone-icon.svg")} />
                            <span>(202) 555-0198</span>
                        </div>
                        <div>
                            <SVG className='contact-icon' src={require("../../Images/email-icon.svg")} />
                            <span>explore@outdooradventures.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
