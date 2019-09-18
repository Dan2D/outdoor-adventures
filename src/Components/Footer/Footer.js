import React from 'react';
import {Link} from 'react-router-dom';

import SVG from 'react-inlinesvg';
import "./Footer.scss";

function Footer() {
    return (
        <div className='footer-container'>
            <SVG className='footer-waves' src={require("../../images/waves-bg.svg")} />
            <div className='footer__content container-fluid'>
                <div className='row'>
                    <div className='footer__left col-3 col-md-6'>
                        <SVG className='footer__logo' src={require("../../images/site-logo.svg")} />
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
                                <SVG className='contact-icon' src={require("../../images/icons/hours-icon.svg")} />
                                <span>Thurs - Sun <br/> 8:00 AM - 8:00 PM</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../images/icons/location-icon.svg")} />
                                <span>117 HillCrest Dr. Seattle, WA 98161</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../images/icons/phone-icon.svg")} />
                                <span>(202) 555-0198</span>
                            </div>
                            <div>
                                <SVG className='contact-icon' src={require("../../images/icons/email-icon.svg")} />
                                <span>explore@outdooradventures.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__bottom row justify-content-center'>
                    <div className='footer__social-lnks'>
                        <a href="https://www.instagram.com/" rel='noopenner noreferrer' aria-label='instagram link' target='_blank'>
                            <SVG src={require("../../images/icons/instagram-icon.svg")}  />
                        </a>
                        <a href="https://www.twitter.com/" rel='noopenner noreferrer' aria-label='twitter link' target='_blank'>
                            <SVG src={require("../../images/icons/twitter-icon.svg")} />
                        </a>
                        <a href="htttps://www.facebook.com/" rel='noopenner noreferrer' aria-label='facebook link' target='_blank'>
                            <SVG src={require("../../images/icons/facebook-icon.svg")} />
                        </a>
                    </div>
                    <p className='copyright'>Copyright &copy;2019</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
