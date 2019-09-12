import React from 'react';

import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Blurb from "../Blurb/Blurb";
import Tours from "../Tours/Tours";
import Reviews from "../Reviews/Reviews";
import "./Home.scss";

function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <Blurb />
            <Tours />
            <Reviews />
        </div>
    )
}

export default Home
