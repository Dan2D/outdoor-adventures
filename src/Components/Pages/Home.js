import React from 'react';

import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Blurb from "../Blurb/Blurb";
import Tours from "../Tours/Tours";
import Reviews from "../Reviews/Reviews";
import "./Home.scss";


function Home(props) {
    window.scrollTo(0,0);
    return (
        <div className='home-container'>
            <Hero page="home" text={`Come On In,${'\n'}The Water's Fine!`}/>
            <Categories />
            <Blurb />
            <Tours />
            <Reviews />
        </div>
    )
}

export default Home
