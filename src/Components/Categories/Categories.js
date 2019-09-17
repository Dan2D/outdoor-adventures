import React from 'react';

import Card from "../Card";
import "./Categories.scss";

function Categories(props) {
    return (
        <div className='category-container'>
            <h2 className='category__title'>Categories</h2>
            <div className='category-cards-container'>
                <Card type="category" cardTitle="Rentals" bg="rentals/kayaks"/>
                <Card type="category" cardTitle="Tours" bg="tour1"/>
                {/* <Card type="category" cardTitle="Category - 3" /> */}
            </div>
        </div>
    )
}

export default Categories
