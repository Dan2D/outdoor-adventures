import React from 'react';
import {Link} from 'react-router-dom';
import "./Hero.scss";

function Hero() {
    return (
        <div className='hero-container'>
            <h1 className='hero__c2a-txt'>Come On In the Water's Fine!</h1>
            <Link className='hero__c2a-btn btn' to="/tours" >Jump In!</Link>
        </div>
    )
}

export default Hero
