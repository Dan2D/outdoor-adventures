import React from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';
import "./Hero.scss";

function Hero(props) {
    let color;
    switch(true) {
        case props.page === 'explore':
            color = '#f1bc53';
            break;
        case props.page === 'about':
            color = '#85CCC8';
            break;
        case props.page === 'contact':
            color = '#6fcae3';
            break;
        default:
            color = null;
    }

    return (
        <div className={`hero-container hero-container--${props.page}`} >
            {props.page !== 'contact' && <>
            <SVG className='hero__mtn-bg' src={require("../../images/mtn-bg.svg")} />
            <SVG className='hero__clouds-bg hero__clouds-bg--A' src={require("../../images/clouds-bg.svg")}/>
            <SVG className='hero__clouds-bg hero__clouds-bg--B' src={require("../../images/clouds-bg.svg")}/>
            </>}
            <div className={`hero__img hero__img--${props.page}`} style={{background: props.page !== "home" ? color : null}}>
                {props.page !== 'home' && <h1 className='hero__page-title' >{props.title}</h1>}
                <h1 className={`hero__c2a-txt hero__c2a-txt--${props.page}`}>{props.text}</h1>
                {props.page !== 'home' && <SVG className={`hero-svg hero-svg--${props.page}`} src={require(`../../images/hero/${props.page}-svg.svg`)} />}
                {props.page === 'home' && <Link className='hero__c2a-btn btn' to="/explore" >Jump In!</Link>}
                {(props.page !== 'home' && props.page !== 'contact') && <SVG className='hero-border--bottom' src={require("../../images/wave-border.svg") } preProcessor={code => code.replace(/fill=".*?"/g, 'fill="#366F99"')}/>}
            </div>
        </div>
    )
}

export default Hero
