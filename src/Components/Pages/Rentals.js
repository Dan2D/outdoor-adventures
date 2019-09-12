import React from 'react';
import {TourData} from "../../Utils/ToursInfo";


import Hero from "../Hero/Hero";
import Tile from "../Tile";
import Card from "../Card";
import ExploreMsg from "../Explore/ExploreMsg";
import "./Rentals.scss";


function Rentals() {
    let tourCards = [];
        Object.keys(TourData).forEach(tour => {
            tourCards.push(<Card 
                            key={tour} 
                            type='detail' 
                            price={TourData[tour].price} 
                            cardTitle={TourData[tour].name} 
                            detailTxt={TourData[tour].description} 
                            />)
        })

    return (
        <div>
            <Hero text="- Grab Your Gear And Explore The Sites -" page="explore"/>
            <div className='rental-tiles-container'>
                <Tile rental="kayaks" />
                <Tile rental="sup" />
                <Tile rental="canoes" />
                <Tile rental="bikes" />
            </div>
            <div className='tour-cards-container'>
                {tourCards}
            </div>
            <ExploreMsg />
        </div>
    )
}

export default Rentals
