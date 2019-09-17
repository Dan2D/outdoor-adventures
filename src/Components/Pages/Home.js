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
        <>
            <Hero page="home" text="Come On In The Water's Fine!"/>
            <Categories />
            <Blurb />
            <Tours />
            <Reviews />
        </>
    )
}

export default Home
