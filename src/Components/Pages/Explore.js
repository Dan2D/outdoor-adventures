import React from 'react';
import queryString from 'query-string';
import {TourData} from "../../Utils/ToursInfo";


import Hero from "../Hero/Hero";
import Tile from "../Tile";
import Card from "../Card";
import ExploreMsg from "../Explore/ExploreMsg";
import "./Explore.scss";


function Explore(props) {
    let query = queryString.parse(props.location.search);
    if (query.category === "tours"){
        console.log(document.getElementById("tours"))
    setTimeout(() => {document.getElementById("tours").scrollIntoView(true)}, 200);
    }
    else {
        window.scrollTo(0,0);
    }
    
    let tourCards = [];
        Object.keys(TourData).forEach(tour => {
            tourCards.push(<Card 
                            key={tour} 
                            type='detail' 
                            price={TourData[tour].price} 
                            bg={tour}
                            cardTitle={TourData[tour].name} 
                            detailTxt={TourData[tour].description} 
                            />)
        })

    return (
        <div className='explore-container'>
            <Hero page='explore' title='Explore' text='- Grab Your Gear And Explore The Sites -' />
            <div className='rental-tiles-container'>
                <h2 className='rental-tiles__title'>Rentals</h2>
                <Tile rental='kayaks' />
                <Tile rental='sup' />
                <Tile rental='canoes' />
                <Tile rental='bikes' />
            </div>
            <div id="tours" className='tour-cards-container'>
                <h2 className='tour-cards__title'>Tours</h2>
                {tourCards}
            </div>
            <ExploreMsg />
        </div>
    )
}

export default Explore
