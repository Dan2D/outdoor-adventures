import React from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';
import "./Hero.scss";

function Hero(props) {
    return (
        <div className={`hero-container hero-container--${props.page}`}>
            {props.page !== 'home' && <h1 className='hero__page-title' >{props.page[0].toUpperCase().concat(props.page.slice(1))}</h1>}
            <h1 className='hero__c2a-txt'>{props.text}</h1>
            {props.page === 'explore' && <SVG className='gear-svg' src={require("../../Images/gear-group.svg")} />}
            {props.page === 'home' && <Link className='hero__c2a-btn btn' to="/tours" >Jump In!</Link>}
        </div>
    )
}

export default Hero
