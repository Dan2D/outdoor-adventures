import React from 'react';
import {RentalsData as rentals} from "../Utils/RentalsInfo";

function Tile(props) {
    const bg = `../Images/${props.rental}-bg.jpg`;
    const tileStyle = {
        background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${require("../Images/" + props.rental + "-bg.jpg")})`,
        backgroundSize: 'cover'
    }
    return (
        <div className={`tile-container tile-container--${props.rental}`} style={tileStyle}>
            <h2 className='tile__title'>{props.rental[0].toUpperCase().concat(props.rental.slice(1))}</h2>
            <div className={`tile__price-container tile__price-container--${props.rental}`}>
                <div className='price-container price-container--hourly'>
                    <h4 className='price__title'>Hourly</h4>
                    <p>${rentals[props.rental].hourly_price.toFixed(2)}/hr</p>
                </div>
                {props.rental !== "bikes" &&
                <>
                    <div className='vertical-line'/>
                    <div className='price-container price-container--daily'>
                        <h4 className='price__title'>Daily</h4>
                        <p>${rentals[props.rental].daily_price.toFixed(2)}/day</p>
                        <p style={{fontSize: "0.8em"}}><i>(${rentals[props.rental].extra_day_price.toFixed(2)} per additional day)</i></p>
                    </div>
                </>}
            </div>
            <p className='tile__msg' >{rentals[props.rental].msg}</p>
            <img className='tile__icon' src={require(`../Images/${props.rental}-icon.png`)} alt={props.rental} />
        </div>
    )
}

export default Tile
