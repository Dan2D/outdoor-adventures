import React from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';
import "./Hero.scss";

function Hero(props) {
    return (
        <div className={`hero-container hero-container--${props.page}`}>
            {props.page !== 'home' && <h1 className='hero__page-title' >{props.title}</h1>}
            <h1 className='hero__c2a-txt'>{props.text}</h1>
            {props.page !== 'home' && <SVG className={`hero-svg hero-svg--${props.page}`} src={require(`../../images/hero/${props.page}-svg.svg`)} />}
            {props.page === 'home' && <Link className='hero__c2a-btn btn' to="/explore" >Jump In!</Link>}
            {props.page !== 'home' && <SVG className='hero-border--bottom' src={require("../../images/wave-border.svg") } preProcessor={code => code.replace(/fill=".*?"/g, 'fill="#366F99"')}/>}
        </div>
    )
}

export default Hero
