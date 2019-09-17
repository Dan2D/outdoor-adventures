import React, {useEffect, useState} from 'react';
import {RentalsData as rentals} from "../Utils/RentalsInfo";

function Tile(props) {
    const [tileBg, setTileBg] = useState(window.innerWidth > 1280 ? false : true);
    const tileStyle = {
        background: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${require("../images/rentals/" + props.rental + "-bg.jpg")})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }

    useEffect(() => {
        window.addEventListener('resize', handleWinResize);

        return () => {
            window.removeEventListener('resize', handleWinResize);
        }
    }, [handleWinResize])

    function handleWinResize() {
        if (window.innerWidth < 1280 && !tileBg) {
            setTileBg(true);
        }
        else if (window.innerWidth > 1280 && tileBg) {
            setTileBg(false);
        }
    }


    return (
        <div className={`tile-container tile-container--${props.rental}`} style={tileBg ? tileStyle : null}>
            <h2 className='tile__title'>{props.rental[0].toUpperCase().concat(props.rental.slice(1))}</h2>
            <div className={`tile__price-container tile__price-container--${props.rental}`}>
                <div className='price-container price-container--hourly'>
                    <h4 className='price__title'>Hourly</h4>
                    <p>${rentals[props.rental].hourly_price.toFixed(2)}/hr</p>
                    {props.rental === 'bikes' && <p><i>(Bike Rentals only available hourly)</i></p>}
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
            <div className='tile__side-img' style={tileStyle}/>
            <img className='tile__icon' src={require(`../images/rentals/${props.rental}-icon.png`)} alt={props.rental} />
        </div>
    )
}

export default Tile
