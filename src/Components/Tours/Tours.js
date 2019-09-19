import React from 'react';
import {Link} from 'react-router-dom';

import Card from "../Card";

function Tours() {
    return (
        <div className='tours-container'>
            <h2 className='tours__title'>Tours</h2>
            <div className='tours-cards-container'>
                <Card type="tour" price={60} cardTitle="Bay Area Tour" bg="tour1"/>
                <Card type="tour" price={80} cardTitle="LightHouse Tour" bg="tour2"/>
                <Card type="tour" price={120} cardTitle="3-Hour Night Tour" bg="tour3"/>
            </div>
            <Link className='tours__btn btn' to="/explore?category=tours">More Tours...</Link>
        </div>
    )
}

export default Tours
