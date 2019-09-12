import React from 'react';
import {Link} from 'react-router-dom';

import Card from "../Card";

function Tours() {
    return (
        <div className='tours-container'>
            <Card type="tour" price={60} cardTitle="Tour-1" />
            <Card type="tour" price={80} cardTitle="Tour-2" />
            <Card type="tour" price={120} cardTitle="Tour-3" />
            <Link className='tours__btn btn' to="/tours">More Tours...</Link>
        </div>
    )
}

export default Tours
