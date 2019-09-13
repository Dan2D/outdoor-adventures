import React from 'react';
import {Link} from 'react-router-dom';

import SVG from 'react-inlinesvg';
import "./Footer.scss";

function Footer() {
    return (
        <div className='footer-container'>
            <SVG className='footer-waves' src={require("../../Images/waves-bg.svg")} />
            <div className='footer__content container-fluid'>
                <div className='row'>
                    <div className='footer__left col-3 col-md-6'>
                        <SVG className='footer__logo' src={require("../../Images/site-logo.svg")} />
                        <div className='footer_lnks'>
                            <Link to="/">HOME</Link>
                            <Link to="/explore">EXPLORE</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact">CONTACT &amp; INFO</Link>
                        </div>
                    </div>
                    <div className='footer__right col-9 col-md-6' >
                        <div className='contact-info'>
                            <div className='d-flex'>
                                <SVG className='contact-icon' src={require("../../Images/icons/hours-icon.svg")} />
                                <span>Thurs - Sun <br/> 8:00 AM - 8:00 PM</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../Images/icons/location-icon.svg")} />
                                <span>117 HillCrest Dr. Seattle, WA 98161</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../Images/icons/phone-icon.svg")} />
                                <span>(202) 555-0198</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../Images/icons/email-icon.svg")} />
                                <span>explore@outdooradventures.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='footer__social-lnks'>
                        <a href="https://www.instagram.com/" rel='noopenner noreferrer' target='_blank'>
                            <SVG src={require("../../Images/icons/instagram-icon.svg")} />
                        </a>
                        <a href="https://www.twitter.com/" rel='noopenner noreferrer' target='_blank'>
                            <SVG src={require("../../Images/icons/twitter-icon.svg")} />
                        </a>
                        <a href="htttps://www.facebook.com/" rel='noopenner noreferrer' target='_blank'>
                            <SVG src={require("../../Images/icons/facebook-icon.svg")} />
                        </a>
                    </div>
                    <p className='copyright'>Copyright &copy;2019</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
