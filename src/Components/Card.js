import React from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';

function Card(props) {
    const DETAIL = 'detail';
    const REVIEW = 'review';
    return (
        <div className={`card-container card-container--${props.type}`}>            
            <div className={`card__top card__top--${props.type}`}
            style={{
            background: `${props.type !== REVIEW ? "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(" + require("../images/" + props.bg + "-bg.jpg") + ")" : "white"}`,
            backgroundSize: 'cover',
            backgroundPosition: 'top'
            }}>
                {props.type === REVIEW && <SVG className='card__site-logo' src={require("../images/site-logo.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />}
                <div className='card__top-txt'>
                    {props.price && <p>${props.price}</p>}
                    <h4 className='card__title'>{props.cardTitle[0].toUpperCase().concat(props.cardTitle.slice(1))}</h4>
                </div>
                {props.type !== REVIEW ? (
                <Link className={`card__btn card__btn--${props.type} btn`} to={`/explore?category=${props.cardTitle}`}>
                    Learn More
                </Link>) : (
                <>
                    <p className='review-txt'>{props.reviewTxt}</p>
                    <p className='review-name'>-{props.userName}</p>
                </>
                )}
            </div>
            {props.type === DETAIL && (
            <div className={`card__bottom card__bottom--${props.type}`}>
                <p>{props.detailTxt}</p>
            </div>
            )}
        </div>
    )
}

export default Card
